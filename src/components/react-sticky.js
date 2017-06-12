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
    className: PropTypes.string,
    scroller: PropTypes.object,
    top: PropTypes.string,
    bottom: PropTypes.string,
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
    return cssDetect('position', 'sticky');
  }

  get scrollTop(){
    const {scroller} = this.props;
    if(this.isWindow){
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
    return scroller.scrollTop;
  }

  get child(){
    const { hidden } = this.state;
    const { children,top,bottom } = this.props;
    const { style,...childProps } = children.props;
    const position = !hidden ? 'fixed' : 'static';

    return this.supportSticky ?  children :cloneElement(children,{
      ...childProps,
      style:{ position, top, bottom,...style }
    });
  }

  get shadowChild(){
    const {children,top,bottom} = this.props;
    return cloneElement(children, {
      ...children.props,
      style:objectAssign({...children.props.style},{top,bottom}),
      hidden:this.state.hidden,
      'data-role':'shadow-element'
    });
  }

  get bound(){
    return this._root.getBoundingClientRect();
  }

  componentWillMount(){
    if(!this.supportSticky){
      // history.scrollRestoration='manual';
      this.attachEvents();
    }
  }

  componentDidMount(){
    this._root = this.refs.root;
    this._boundTop = this.bound.top + this.scrollTop;
  }

  componentWillUnmount(){
    this._root = null;
    this._boundTop = null;
    this._scrollRes && this._scrollRes.destroy();
  }

  attachEvents(){
    const {scroller} = this.props;
    this._scrollRes = NxDomEvent.on(scroller,'scroll',this._onScroll);
  }

  _onScroll =  (inEvent)=> {
    this.setState({
      hidden:this.scrollTop <= this._boundTop - parseInt(this.props.top)
    });
  };

  render(){
    const {className,children,scroller,top,bottom,style,...props} = this.props;
    const supportSticky = this.supportSticky;
    const currentStyle = supportSticky ? objectAssign({ top, bottom },props) : style;
    return (
      <section ref='root' {...props} style={currentStyle} data-support-sticky={supportSticky} className={classNames('react-sticky',className)}>
      {this.child}
      {!supportSticky && this.shadowChild}
      </section>
    );
  }
}
