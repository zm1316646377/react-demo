import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // 提高性能，避免不必要的render
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render () {
        const { content } = this.props ;
        
        // JSX =》 createElement =》虚拟DOM(JS对象) =》真实的DOM
        return (
            <div onClick = {this.handleClick}>
               {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
        // this.props.deleteItem(this.props.index);
    }
}

// 设置属性类型
TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,
    // content: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    // test: 'hello world'
}

export default TodoItem; // 默认导出和命名导出
// export const TodoItem1 = TodoItem;