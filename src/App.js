import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title={<Link style={{textDecoration:'none', color:'white'}} to="./">MyPortfolio</Link> } className="header-color" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="./">MyPortfolio</Link> }>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
