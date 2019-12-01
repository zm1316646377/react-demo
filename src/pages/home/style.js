import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-top: 30px;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    overflow: hidden; /* 触发BFC 感应子元素高度 */
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #DCDCDC;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    /* display: inline-flex; */
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic {
        float: left;
        height: 100%;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #DCDCDC;
    .list-item-pic {
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListItemInfo = styled.div`
    /* width: 500px; */
    /* float: left; */
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    } 
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    text-align: center;
    background: #A5A5A5;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    margin-top: -4px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 10px;
`;

export const WriterWrapper = styled.div`
    width: 280px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #DCDCDC;
    text-align: center;
    line-height: 100%;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #CCCCCC;
`;