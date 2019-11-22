import React , {Fragment} from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; CSS 全局生效
import App from './App';
import { GlobalStyle } from './style.js';
import  { GlobalIconFontStyle } from './statics/iconfont/iconfont.js';


const GlobalApp = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <GlobalIconFontStyle />
            <App />
        </Fragment>
    )
}

ReactDOM.render(<GlobalApp/>, document.getElementById('root'));

