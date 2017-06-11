import './style.scss';

import React,{PureComponent, cloneElement} from 'react';

import NxDomEvent from 'next-dom-event';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cssDetect from 'css-detect';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    scroller: PropTypes.object,
    top:PropTypes.string,
    bottom:PropTypes.string,
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
    return !cssDetect('position', 'sticky');
  }

  get scrollTop(){
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  get child(){
    const {hidden} = this.state;
    const {children} = this.props;
    const {style,top,bottom,...childProps} = children.props;
    const positionStyle = !hidden ? 'fixed' : 'relative';
    return cloneElement(children,{
      ...childProps,
      style:{
        position:positionStyle,
        top,
        bottom
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
    const {className,children,scroller,top,bottom,...props} = this.props;
    const supportSticky = this.supportSticky;
    return (
      <section ref='root' {...props} data-support-sticky={supportSticky} className={classNames('react-sticky',className)}>
      {this.child}
      {!supportSticky && this.clonedChild}
      </section>
    );
  }
}
