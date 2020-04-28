import React, {Component} from 'react'

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

import { FormGroup, Input, Label, Col } from 'reactstrap';
import { Paper, Divider, Box } from '@material-ui/core';
import {NotificationManager} from 'react-notifications'
import {
	Rating
} from "Components/Widgets";

import {withStyles} from '@material-ui/styles';

const styles = {
    wrapper:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        padding:40,
        '@media (max-width:900px)':{
            flexDirection:'column',
            padding:10,
        }
    },
    leftBox:{
        width:'48%',
        '@media (max-width:900px)':{
            width:'100%',
        }
    },
    rightBox:{
        width:'48%',
        '@media (max-width:900px)':{
            width:'100%',
        }
    },
    dividerContainer:{
        width: 1
    }
}

class SubmitTestimonial extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            rating: 0,
            feedback:'',
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleRating = this.handleRating.bind(this);
    }
   
    handleChange (event){
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value}
            );
    }

    handleRating(value){
        this.setState({
            ...this.state,
            ...value
        });
    }

    submit = () => {
        console.log(this.state)
        NotificationManager.success('Submitted successfully!')
     }

    render(){
        const {classes} = this.props;
        return (
            <div className="p-3">
                <PageTitleBar title={"Submit Testimonial"} />
                <Paper>
                    <Box  className={classes.wrapper}>
                        <Box className={classes.leftBox}>
                            <FormGroup row>
                            <Label for="firstname" sm={3}>First Name</Label>
                            <Col sm={9}>
                                <Input 
                                    type="text" 
                                    name="firstname" 
                                    id="firstname" 
                                    className="input-lg" 
                                    value={this.state.firstname}
                                    onChange = {() => this.handleChange(event)}
                                />
                            </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label for="lastname" sm={3}>Last Name</Label>
                            <Col sm={9}>
                                <Input 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    className="input-lg" 
                                    value ={this.state.lastname}
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
                                    value={this.state.email}
                                    onChange = {() => this.handleChange(event)}
                                />
                            </Col>
                            </FormGroup>
                        </Box>
                        <Box  className={classes.dividerContainer}>
                            <Divider orientation="vertical" />
                        </Box>
                        <Box  className={classes.rightBox}>
                            <Rating 
                                rating={this.state.rating}
                                feedback={this.state.feedback}
                                setValue = {this.handleRating}
                                submit = {this.submit}
                            />
                        </Box>

                    </Box>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(SubmitTestimonial)