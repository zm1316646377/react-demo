import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
// import { changeSearchFocusedAction } from './store/actionCreator'
// import  * as actionCreator from './store/actionCreator';
import { actionCreator } from './store';

import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper, 
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem
} from './style.js';

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in = {props.focused}
                        timeout = {200}
                        classNames = 'slide'>
                        <NavSearch 
                            className = { props.focused ? 'focused' : '' }
                            onFocus = { props.handleInputFocus }
                            onBlur = { props.handleInputBlur }
                            />
                    </CSSTransition>
                    <span className = { props.focused ? 'focused iconfont' : 'iconfont' }>
                        &#xe62d;
                    </span>
                    <SearchInfo style = { {visibility: props.focused ? "visible" : "hidden"} }>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <div>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                            <SearchInfoItem>教育</SearchInfoItem>
                        </div>
                    </SearchInfo>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className = 'writing'>
                    <span className="iconfont">&#xe641;</span>
                    写文章</Button>
                <Button className = 'reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        // focused: state.header.focused
        // focused: state.header.get('focused') 使用immutable 

        // focused: state.get('header').get('focused') // 使用redux-immutabless
        focused: state.getIn(['header', 'focused'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // const action = changeSearchFocusedAction(true);
            const action = actionCreator.changeSearchFocusedAction(true);
            dispatch(action);
        },
        handleInputBlur() {
            // const action = changeSearchFocusedAction(false);
            const action = actionCreator.changeSearchFocusedAction(false);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;