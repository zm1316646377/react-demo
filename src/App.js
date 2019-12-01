import React, { Component } from 'react';
import Header from './common/header/index';
import store from './store/index'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';

class App extends Component {

    render() {
        return (
            <Provider store = {store}>
                <BrowserRouter>
                    <Header />
                    <Route path = '/' exact component = { Home } />
                    <Route path = '/detail/:id' exact component = { Detail } />
                    {/* <Route path = '/detail' exact component = { Detail } /> */}
                    <Route path = '/login' exact component = { Login } />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;