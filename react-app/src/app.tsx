import React from 'react';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter } from "react-router-dom";
import config from '@/config/routerConfig';
import Router from '@/cluster/Router';
import FlowHeader from '@/components/Header';
import '@/app.scss';


const {
    Header, Footer, Content
} = Layout;

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
            <div className="homeBox">
                <Layout className="home-con">
                    <FlowHeader></FlowHeader>
                    <Content className='dash-content'>
                        {/* 路由主体 */}
                        
                            <Router defaultConfig={config.routeConfig}></Router>
                        {/* 路由主体 */}
                    </Content>
                    <Footer>"hell is other people!"</Footer>
                </Layout>
            </div>
            </BrowserRouter>
        )
    }
}

export default App;