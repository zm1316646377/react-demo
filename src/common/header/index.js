import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
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

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;

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
                            in = {focused}
                            timeout = {200}
                            classNames = 'slide'>
                            <NavSearch 
                                className = { focused ? 'focused' : '' }
                                onFocus = { () => { handleInputFocus(list) } }
                                onBlur = { handleInputBlur }
                                />
                        </CSSTransition>
                        <span className = { focused ? 'focused iconfont zoom' : 'iconfont zoom' }>
                            &#xe62d;
                        </span>
                       {
                            this.getSearchArea()
                       }
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

    getSearchArea() {
        const { focused, list, page, mouseIn } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        let endIndex = page * 6;
        if (endIndex > jsList.length) {
            endIndex = jsList.length;
        }
 
        if (jsList.length) {
            for (let i = (page - 1) * 6; i < endIndex; i++) {
                pageList.push(<SearchInfoItem key = {jsList[i]}>{jsList[i]}</SearchInfoItem>);
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter = { this.props.handleMouseEnter }
                    onMouseLeave = { this.props.handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = { () => { this.props.handlePageChange(this.spinIcon) } }>
                            <span ref = {(icon) => {this.spinIcon = icon}} className="iconfont switch-spin" >&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                       { pageList }
                    </div>
                </SearchInfo>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list);
            if (list.size === 0) {
                dispatch(actionCreator.createGetTrendingSearchListAction());
            }

            const action = actionCreator.createChangeSearchFocusedAction(true);
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreator.createChangeSearchFocusedAction(false);
            dispatch(action);
        },
        handleMouseEnter() {
            const action = actionCreator.createChangeMouseEnterAction(true);
            dispatch(action);
        },
        handleMouseLeave() {
            const action = actionCreator.createChangeMouseEnterAction(false);
            dispatch(action);
        },
        handlePageChange(spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10) - 360;
            } else {
                originAngle = 360;
            }

            spinIcon.style.transform = 'rotate(' + originAngle + 'deg)';
            const action = actionCreator.createChangePageAction();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;