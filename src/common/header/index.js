import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style.js';
import { connect } from 'react-redux';

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
                            className = {props.focused ? 'focused' : ''}
                            onFocus = { props.handleInputFocus }
                            onBlur = { props.handleInputBlur }
                            />
                    </CSSTransition>
                    <span className = {props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</span>
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


// class Header extends Component {

//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <NavItem className='right'>登陆</NavItem>
//                     <NavItem className='right'>
//                         <span className="iconfont">&#xe636;</span>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             in = {this.props.focused}
//                             timeout = {200}
//                             classNames = 'slide'>
//                             <NavSearch 
//                                 className = {this.props.focused ? 'focused' : ''}
//                                 onFocus = { this.props.handleInputFocus }
//                                 onBlur = { this.props.handleInputBlur }
//                                 />
//                         </CSSTransition>
//                         <span className = {this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</span>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className = 'writing'>
//                         <span className="iconfont">&#xe641;</span>
//                         写文章</Button>
//                     <Button className = 'reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'change_focused_value',
                value: true
            };
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'change_focused_value',
                value: false
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;