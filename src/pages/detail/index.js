import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreator } from './store';

class Detail extends PureComponent {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML = {{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetailData(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData(id) {
            dispatch(actionCreator.createGetDetailDataAction(id));
        }
    }
}

// withRouter: 获得路由信息，App.js加载的是异步组件，loadable.js可以直接获得路由信息
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));