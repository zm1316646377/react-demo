import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';


// 异步组件：可以在使用的时候再加载该组件，而不是在加载首页的时候就加载所有组件
const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>正在加载</div>
  }
});

export default () => (
    <LoadableComponent/>
)