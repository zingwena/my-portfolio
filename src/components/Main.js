import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landingpage from './Landingpage'
import Aboutme from './Aboutme';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
const Main =() =>(
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/aboutme" component={Aboutme}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Main;