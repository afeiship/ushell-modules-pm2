import './style.scss';

import React,{PureComponent, cloneElement} from 'react';

import NxDomEvent from 'next-dom-event';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

function featureTest(property, value, noPrefixes) {
  // Thanks Modernizr!
  //css-positionsticky.js
  // https://github.com/phistuck/Modernizr/commit/3fb7217f5f8274e2f11fe6cfeda7cfaf9
  // 948a1f5
  var prop = property + ':',
    el = document.createElement('test'),
    mStyle = el.style;
  if (!noPrefixes) {
    mStyle.cssText = prop + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join(value + ';' + prop) + value + ';';
  } else {
    mStyle.cssText = prop + value;
  }
  return mStyle[property].indexOf(value) !== -1;
}

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    scroller: PropTypes.object,
    top:PropTypes.number,
    bottom:PropTypes.number,
  };

  static defaultProps = {
    scroller:window
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      hidden:true,
    };
  }

  get isWindow(){
    return this.props.scroller === window;
  }

  get supportSticky(){
    return featureTest('position', 'sticky');
  }

  get scrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  get child(){
    const {hidden} = this.state;
    return cloneElement(this.props.children,{
      style:{
        position:!hidden ? 'fixed' : 'relative'
      }
    });
  }

  get clonedChild(){
    const {children} = this.props;
    const {className,...props} = children.props;
    return cloneElement(children, objectAssign(props,{
      hidden:this.state.hidden,
      className:classNames(children.props.className,'react-shadow-child')
    }));
  }

  get bound(){
    return this._root.getBoundingClientRect();
  }

  componentWillMount(){
    if(!this.supportSticky){
      history.scrollRestoration='manual';
      this.attachEvents();
    }
  }

  componentDidMount(){
    this._root = this.refs.root;
    this._boundTop = this.bound.top;
  }

  attachEvents(){
    if(this.isWindow){
      this._scrollRes = NxDomEvent.on(window,'scroll',this._onScroll);
    }
  }

  _onScroll = (inEvent) => {
    this.setState({
      hidden:this.scrollTop <= this._boundTop
    });
  };

  render(){
    const {className,children,scroller,...props} = this.props;
    const supportSticky = this.supportSticky;
    return (
      <section ref='root' {...props} data-support-sticky={supportSticky} className={classNames('react-sticky',className)}>
      {supportSticky && children}
      {!supportSticky && this.child}
      {!supportSticky && this.clonedChild}
      </section>
    );
  }
}
