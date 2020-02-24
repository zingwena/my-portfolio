import React, { Component } from 'react';
import Background from './img/flutter.jpg';
import Background1 from './img/polling.png';
import Background2 from './img/ehr.jpg';

import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '1100px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '700px', textAlign: 'center', background:  "url(" + Background2 + ")" }}></CardTitle>
                        <CardText style={{color:'black', fontStyle:'italic'}}>
                        The Electronic Health Record (EHR) mobile application is a community-based extension of the national electronic health record (EHR). The community module will allow for EHR services to be extended beyond the health facility.
                        These will complement community services such as outreach programs and national health events such as national health campaigns. The community module will run as an offline version of the EHR.This application was designed using 
                        flutter and Java

                        </CardText>
                        {/* <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }

        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '1000px', margin: 'auto' }}>
                        <CardTitle style={{ color: 'white', height: '600px', textAlign: 'center',background:  "url(" + Background1 + ")" }}></CardTitle>
                        
                        <CardText style={{color:'black', fontStyle:'italic'}}>
                       This Polling app is web-dased app that enable a participant to register and sign in to the app .After sign in 
                       it allows user to create a poll .I designed this app using react js front-end and spring-boot back-end
                        </CardText>
                        {/* <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'cadetblue' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '700px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '700px', textAlign: 'center', background:  "url(" + Background + ")" }}></CardTitle>
                        
                        <CardText style={{color:'black', fontStyle:'italic'}}>
                       
                        Note Keeper is an simple notepad app that lets you:
*Backup and Restore your stuff!
*Make simple Notes
*Make To do lists
*Use Vault to secure your written creation.

*It also enable you to save your app as of high or low priority.
I designed this app using flutter and sqlite back-end
                        </CardText>
                        {/* <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'white' }}>
                            <IconButton name="share"></IconButton>
                        </CardMenu> */}
                    </Card>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }

}
export default Projects;