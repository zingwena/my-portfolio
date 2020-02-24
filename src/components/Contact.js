import React from 'react';
import { Grid, Cell, List,ListItem, ListItemContent } from 'react-mdl';
function Contact() {

    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Warren Zingwena</h2>
                    <img
                        src={require('./img/Warren.png')}
                        alt="avatar"
                        className="avatar-img"
                        style={{height:'230px'}}
                    ></img>
                    <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                    An exceptionally creative individual with strong analytical 
                    skills and B.S. in Computer Engineering. Looking to obtain the position of
                     software developer at NBC. Offering outstanding ability to work with various programming languages,
                      including Java script, HTML, XML, CSS, and PHP.
                    
                    </p>

                </Cell>
                <Cell col={6}>
                <h2> Contact Me</h2>
                <hr />
                <div className="contact-list">
                <List>
         <ListItem>

         <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
             <i className="fa fa-phone-square" aria-hidden="true" />
             (+263 78 281 3035)
        </ListItemContent>

         </ListItem>
         <ListItem>

         <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
        <i className="fa fa-envelope" aria-hidden="true" />
             warrenzingwena@gmail.com
         </ListItemContent> 

         </ListItem>
         <ListItem>
         <ListItemContent style={{fontSize:'20px', fontFamily:'Anton'}}>
             <i className="fa fa-skype" aria-hidden="true" />
             MySkypeId
         </ListItemContent>         
             </ListItem>
                 </List>
        
                </div>
                </Cell>
            </Grid>
        </div>
    )
}
export default Contact;