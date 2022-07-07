import React from 'react';
import './App.scss';
import {Layout} from "antd";
import Navbar from "./components/Navbar/Navbar";
const { Content } = Layout;

const App: React.FC = () => {
  return (
	  <Layout className="layout" style={{ minHeight: '100vh' }}>
		  <Navbar/>
		  <Content style={{ padding: '0 30px' }}>
			  <div className="site-layout-content">Content</div>
		  </Content>
	  </Layout>
  );
}

export default App;
