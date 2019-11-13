import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件：只接收props的函数, 性能会高于Component
const AntTodoListUI = (props) => {
    return (
        <div style = {{marginTop: '10px', marginLeft: '10px'}}>
            <div>
                <Input 
                    value = {props.inputValue} 
                    placeholder = 'todo info' 
                    style = {{width: '300px', marginRight: '10px'}}
                    onChange = {props.handleInputChange}/>
                <Button type = 'primary' onClick = {props.handleBtnClick}>提交</Button>
            </div>
            <List
                // header = { <div>Header</div> }
                // footer = { <div>Footer</div> }
                style = {{marginTop: '10px', width: '300px'}}
                bordered
                dataSource = { props.list }
                renderItem = { (item, index) => (<List.Item onClick = {(index) => {props.handleItemDelete(index)} }>{item}</List.Item> )}/>
        </div>
    )
}

// UI 组件：只负责页面的渲染
// class AntTodoListUI extends Component {

//     render() {
//         return (
//             <div style = {{marginTop: '10px', marginLeft: '10px'}}>
//                 <div>
//                     <Input 
//                         value = {this.props.inputValue} 
//                         placeholder = 'todo info' 
//                         style = {{width: '300px', marginRight: '10px'}}
//                         onChange = {this.props.handleInputChange}/>
//                     <Button type = 'primary' onClick = {this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                     // header = { <div>Header</div> }
//                     // footer = { <div>Footer</div> }
//                     style = {{marginTop: '10px', width: '300px'}}
//                     bordered
//                     dataSource = { this.props.list }
//                     renderItem = { (item, index) => (<List.Item onClick = {(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item> )}/>
//             </div>
//         )
//     }
// }

export default AntTodoListUI;