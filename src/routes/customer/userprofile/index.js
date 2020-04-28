/**
 * User Profile Page
 */
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import {UserBlock, YourState, MyBalence} from 'Components';
import { RctCard } from 'Components/RctCard';

import { FormGroup, Input, Form, Label, Col, InputGroup, InputGroupAddon, FormText } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationManager } from 'react-notifications';
import Switch from 'react-toggle-switch';
import { withStyles } from '@material-ui/styles'
import { styles } from './style'
import Cropper from 'react-cropper';
import { Helmet } from "react-helmet";
import { Box, Avatar, Hidden } from "@material-ui/core";

function TabContainer(props) {
   return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
         {props.children}
      </Typography>
   );
}

class UserProfile extends Component {

   constructor(props){
      super(props)
      this.state = {
         username:"Lucile Beck",
         email:"info@email.com",
         password:"1234",
         phoneNumber:"1234567890",
         facebookLink:"https://www.facebook.com",
         profileImage: '',
         active:true,
         src:'',
      }

      this.handleImage = this.handleImage.bind(this);
      this.cropImage = this.cropImage.bind(this);
   }

   onUpdateProfile() {
      NotificationManager.success('Profile Updated Successfully!');
   }

   handleChange = (event) => {
      this.setState({[event.target.name]:event.target.value});
   }

   toggleSwitch = () => {
      this.setState({ active: !this.state.active });
   }

   handleImage(e) {
      e.preventDefault();
      let files;
      if (e.dataTransfer) {
         files = e.dataTransfer.files;
      } else if (e.target) {
         files = e.target.files;
      }
      const reader = new FileReader();
      reader.onload = () => {
         this.setState({ src: reader.result });
      };
      reader.readAsDataURL(files[0]);
   }

   cropImage() {
      if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
         return;
      }
      this.setState({
         profileImage: this.cropper.getCroppedCanvas().toDataURL(),
      });
   }


   render() {

      const { classes } = this.props;

      return (
         <div>
            <Helmet>
					<title>Profile</title>
					<meta name="description" content="User Profile" />
				</Helmet>
            
            <UserBlock />

            <Box className={classes.wrapper}>

               <Hidden smDown>
                  <Box className={classes.leftBox}>
                     <MyBalence />
                  </Box>
               </Hidden>
               
               <Box className={classes.root}>
                  <RctCard>
                     <div className="rct-tabs">
                        <TabContainer>
                           <div className="wrapper">
                              <div className="row">
                                 <div className="profile-wrapper col-12">
                                    <h2 className="heading">Personal Details</h2>
                                    <Form>
                                       <FormGroup row>
                                          <Label for="username" sm={3}>User Name</Label>
                                          <Col sm={9}>
                                             <Input 
                                                type="text" 
                                                name="username" 
                                                id="username" 
                                                className="input-lg" 
                                                value={this.state.username}
                                                onChange = {() => this.handleChange(event)}
                                             />
                                          </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                          <Label for="email" sm={3}>Email</Label>
                                          <Col sm={9}>
                                             <Input 
                                                type="text" 
                                                name="email" 
                                                id="email" 
                                                className="input-lg" 
                                                value ={this.state.email}
                                                onChange = {() => this.handleChange(event)}
                                             />
                                          </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                          <Label for="password" sm={3}>Password</Label>
                                          <Col sm={9}>
                                             <Input 
                                                type="text"
                                                name="password" 
                                                id="password" 
                                                className="input-lg" 
                                                value={this.state.password}
                                                onChange = {() => this.handleChange(event)}
                                             />
                                          </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                          <Label for="telephone" sm={3}>Phone Number</Label>
                                          <Col sm={9}>
                                             <Input 
                                                type="tel" 
                                                name="telephone" 
                                                id="telephone" 
                                                value={this.state.phoneNumber} 
                                                onChange = {() => this.handleChange(event)}
                                                className="input-lg" 
                                             />
                                          </Col>
                                       </FormGroup>
                                    </Form>
                                    <hr />
                                    <h2 className="heading">Facebook connecttion</h2>
                                    <div>
                                       <InputGroup className="mb-20">
                                          <InputGroupAddon addonType="prepend">
                                             <IconButton aria-label="facebook">
                                                <i className="zmdi zmdi-facebook"></i>
                                             </IconButton>
                                          </InputGroupAddon>
                                          <Input 
                                             type="text"
                                             name = "facebookLink"
                                             value = {this.state.facebookLink}
                                             onChange = {()=>{this.handleChange(event)}}
                                             className="input-lg" 
                                          />
                                       </InputGroup>
                                    </div>
                                    <hr/>
                                    <div>
                                       <FormGroup row>
                                          <Label for="active" sm={10}>Account Active</Label>
                                          <Col sm={2}>
                                             <Switch
                                                id="active"
                                                onClick={() => this.toggleSwitch()}
                                                on={this.state.active}
                                             />
                                          </Col>
                                       </FormGroup>
                                    </div>
                                 </div>
                              
                              <div className="profile-wrapper col-12">
                                    {
                                       this.state.src && 
                                       <div className="d-flex align-items-center justify-content-center mb-10">
                                          <Button onClick={()=>{this.cropImage()}} variant="contained" className="bg-success text-white w-100">
                                             Crop Image
                                          </Button>
                                       </div>
                                    }
                                    <Cropper
                                       style={{ height: 400, width: '100%' }}
                                       guides={true}
                                       aspectRatio = {1.0}
                                       src={this.state.src}
                                       ref={cropper => { this.cropper = cropper; }}
                                    />
                                    <FormGroup className="mt-20 mb-20 d-flex justify-space-between align-items-center">
                                       <div className="w-100 mb-10 mb-md-0">
                                          <Input type="file" name="file" id="exampleFile" onChange={this.handleImage.bind(this)} />
                                          <FormText color="muted">
                                             Choose an image for your avatar.
                                          </FormText>
                                       </div>
                                       <Avatar src = {this.state.profileImage} />
                                    </FormGroup>
                                 </div>
                              </div>
                              <hr />
                              <Button variant="contained" color="primary" className="text-white" onClick={() => this.onUpdateProfile()}>Update Profile</Button>
                           </div>
                        </TabContainer>
                     </div>
                  </RctCard>
            
               </Box>

               <Hidden smDown>
                  <Box className={classes.stateBox}>
                        <YourState />
                  </Box>
               </Hidden>
               
            </Box>
         </div>
      );
   }
}
export default withStyles(styles)(UserProfile)