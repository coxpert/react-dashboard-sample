import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import {Box, Typography} from '@material-ui/core';

const useStyles = {
    root:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'cetner',
    }
}

function checkTime(i) {
	if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
	return i;
}

class RemainingTime extends Component {

    constructor(props){
        super(props)

        this.state = {
            date:props.date,
            remainDay:'',
            currentTime: {
                hours: '',
                minutes: '',
                seconds: ''
            }
        }
        this.startTime = this.startTime.bind(this);
    }

    

	UNSAFE_componentWillMount() {
		let self = this;
		this.timer = setInterval(() => {
			self.startTime();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	startTime() {
        let today = new Date();
        let oldDay = new Date(this.state.date);
        let diffTime =Math.abs( oldDay.getTime() - today.getTime());
        let diffDate = new Date(diffTime);
		let h = diffDate.getHours();
		let m = diffDate.getMinutes();
		let s = diffDate.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		let time = {
			hours: h,
			minutes: m,
			seconds: s
		}
		this.setState({ currentTime: time, remainDay: diffDate.getUTCDate()});
	}


    render(){
        const {classes} = this.props;
        return(
            <Box className={classes.root}>
                <Typography className={classes.text}>{`${this.state.remainDay}Days ${this.state.currentTime.hours}:${this.state.currentTime.minutes}:${this.state.currentTime.seconds}`}</Typography>
            </Box>
        )
    }
}

export default withStyles(useStyles)(RemainingTime);