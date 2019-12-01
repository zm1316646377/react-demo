import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import { actionCreator } from './store';


// PureComponent 与 immutable.js结合使用 https://www.jianshu.com/p/c41bbbc20e65 可以
class Home extends PureComponent {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className = 'banner-img' 
                        src='//upload.jianshu.io/admin_banners/web_images/4807/80c81765b76cce7a0cbdab0b65bb34d2fafc0a9b.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' 
                        alt = ''/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick = {this.handleScrollToTop}>顶部</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.getHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

    handleScrollToTop() {
        window.scrollTo(0, 0);
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData() {
            dispatch(actionCreator.createGetHomeDataAction());
        },
        changeScrollTopShow(e) {
            if (document.documentElement.scrollTop > 400) {
                dispatch(actionCreator.createToggleTopShowAction(true));
            } else {
                dispatch(actionCreator.createToggleTopShowAction(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);