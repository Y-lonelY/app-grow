import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import routeConfig from '@/config/routerConfig';
import { config as systemConfig } from '@/config/sysConfig';
import Router from '@/cluster/router';
import FlowHeader from '@/view/Header';
import FlowFooter from '@/view/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
// 国际化
import { LocaleContext } from '@/cluster/context';
import { locale as customizeLocale } from '@/assets/locale';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import en_US from 'antd/es/locale-provider/en_US';
import moment, { locale } from 'moment';
import 'moment/locale/zh-cn';
import '@/app.scss';

const {
    Content
} = Layout;

interface AppState {
    locale: string;
    assets: {};
    toggleLocale: (lang: string) => void;
}

class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            locale: 'en_us',
            assets: customizeLocale.en_us,
            toggleLocale: this.toggleLocal,
        };
    }

    toggleLocal = (lang) => {
        this.setState({
            locale: lang,
            assets: customizeLocale[lang]
        });
    }

    render() {
        return (
            <ErrorBoundary>
                <BrowserRouter>
                    <LocaleContext.Provider value={this.state}>
                        <ConfigProvider locale={this.state.locale === 'zh_cn' ? zh_CN : en_US}>
                            <div className={`homeBox ${systemConfig.hugeScreen ? 'max' : 'mac'}`}>
                                <Layout className="home-con">
                                    <FlowHeader></FlowHeader>
                                    <Content className='dash-content'>
                                        {/* 路由主体 */}
                                        <Router defaultConfig={routeConfig.routeConfig}></Router>
                                        {/* 路由主体 */}
                                    </Content>
                                    <FlowFooter></FlowFooter>
                                </Layout>
                            </div>
                        </ConfigProvider>
                    </LocaleContext.Provider>
                </BrowserRouter>
            </ErrorBoundary>
        )
    }

    componentDidMount() {
        // moment 设置全局 local
        moment.locale(this.state.locale);
    }
}

export default App;
