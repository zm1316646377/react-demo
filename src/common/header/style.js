import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

// 相当于一个带样式的div标签
export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #F0F0F0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block; /* a 内联标签不能设置宽高 */
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    padding-right: 70px;
    width: 960px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    /* 可实现自适应布局 */
    /* @media screen and (max-width: 600px) {
        background: red;   
        visibility: hidden;
    } */
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    } 
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #EA6F5A;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        top: 13px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        &.focused {
            background: #777777;
            color: #FFFFFF;
        }
        /* background:green; */
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #EEEEEE;
    box-sizing: border-box;
    margin: 9px 0;
    padding: 0 20px;
    padding-right: 30px;
    color: #777777;
    font-size: 14px;
    &.slide-enter {
        width: 160px;
        transition: all .3s ease-in
    }
    &.slide-enter-active {
        width: 240px;
    }
    /* &.slide-enter-done {
        width: 240px;
    } */
    &.slide-exit {
        width: 240px;
    }
    &.slide-exit-active {
        width: 160px;
        transition: all .3s ease-in
    }
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    visibility: hidden;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    font-size: 12px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    border: 1px solid #DDDDDD;
    color: #787878;
    border-radius: 3px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin: 9px 10px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid #EC6149;
    font-size: 14px;
    &.reg {
        color: #EC6149;
    }
    &.writing {
        color: #FFFFFF;
        background: #EC6149;
    }
`;