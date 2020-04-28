/**
 * Rating Component
 */
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// chart config
import AppConfig from 'Constants/AppConfig';

import {withStyles} from '@material-ui/styles';

const styles = {
    inputBox:{
        marginBottom: 30,
        height: 300,
    },
}


class Rating extends Component {


   constructor(props){
      super(props)
      this.state={
         rating:this.props.rating,
         feedback: this.props.feedback,
      }
      this.handleFeedback = this.handleFeedback.bind(this);
   }

   onStarClick(nextValue, prevValue, name) {
      this.setState({ rating: nextValue });
      this.props.setValue({rating: nextValue})
   }

   handleFeedback = (event)=>{
      this.setState({feedback: event.target.value})
      this.props.setValue({feedback: event.target.value})
   }

   render() {
      const {classes} = this.props;
      return (
         <div className="rating-wrap bg-warning rct-block py-20 px-30">
            <h4 className="text-white mb-3"><IntlMessages id="widgets.howWouldYouRateUs" /></h4>
            <div className="star-rating list-inline">
               <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={this.state.rating}
                  starColor={AppConfig.themeColors.danger}
                  emptyStarColor={AppConfig.themeColors.white}
                  onStarClick={this.onStarClick.bind(this)}
                  renderStarIcon={() => <i className="zmdi zmdi-star font-2x mr-5"></i>}
                  renderStarIconHalf={() => <i className="zmdi zmdi-star-half font-2x mr-5"></i>}
               />
            </div>
            <Input
               type="textarea"
               name="feedback"
               id="comment"
               placeholder="Tell us what you think?"
               className={classes.inputBox}
               value={this.state.feedback}
               onChange = {() => this.handleFeedback(event)}

            />
            <Button variant="contained" size="small" className="btn-danger text-white btn-icon" onClick={()=>{this.props.submit()}}>
               <i className="zmdi zmdi-mail-send"></i> submit
            </Button>
         </div>
      )
   }
}withStyles(styles);

export default withStyles(styles)(Rating)