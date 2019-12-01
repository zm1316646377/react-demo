import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';


class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.recommendList.map((item) => (
                        <RecommendItem key = {item.get('id')}  imgUrl = {item.get('imgUrl')} />
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList']),
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
  
//     }
// }

export default connect(mapStateToProps, null)(Recommend);