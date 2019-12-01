import React, { PureComponent } from 'react';
import { actionCreator } from '../store';
import { connect } from 'react-redux';
import { ListItem, ListItemInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.articleList.map((item, index) => (
                        <Link key = {index} to = {'/detail/' + item.get('id') }>
                        {/* <Link key = {index} to = {'/detail?id=' + item.get('id') }> */}
                            <ListItem key = { index }>
                                <img 
                                    className = 'list-item-pic'
                                    src = { item.get('imgUrl') } 
                                    alt = '1111'/>
                                <ListItemInfo>
                                    <h3 className = 'title'>{ item.get('title') }</h3>
                                    <p className = 'desc'>{ item.get('desc') }</p>
                                </ListItemInfo>
                            </ListItem>
                        </Link>
                    ))
                }

                {/* { () => {this.props.getMoreList(this.props.page)} 可以解决解决onClick自动触发的issue */}
                <LoadMore onClick = { () => {this.props.getMoreList(this.props.page)} } >更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreator.createLoadMoreListAction(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);