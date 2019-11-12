import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

// For：动画demo
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // show: true
            list: []
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout = {1000}
                                classNames = 'fade'
                                unmountOnExit = {true}
                                onEntered = {(el) => {el.style.color = 'blue'}}
                                appear = {true}
                                key = {index}>

                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick = {this.handleAddItem}>toggle</button> 

                {/* <CSSTransition
                    in = {this.state.show}
                    timeout = {1000}
                    classNames = 'fade'
                    unmountOnExit = 'true'
                    // 钩子函数的el参数代表包裹的div元素
                    onEntered = {(el) => {el.style.color = 'blue'}}
                    // appear 首次加载页面的时候也需要动画效果，会自动给元素添加fade-appear, fade-appear-active, fade-appear-done的class
                    appear = 'true'>
                    <div>hello</div>
                </CSSTransition>
                <button onClick = {this.handleToggle}>toggle</button>  */}

                {/* 
                    <div className = {this.state.show ? 'show' : 'hide'}>hello</div>
                    <button onClick = {this.handleToggle}>toggle</button> 
                */}
            </Fragment>
        )
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...this.state.list, 'item']
            }
        });
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        });
    }
}

export default App;