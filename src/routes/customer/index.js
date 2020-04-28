/**
 * Dasboard Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
   CustomerOverViewComponent,
   CustomerOfferWallsComponent,
   CustomerSurveyWallsComponent,
   CustomerVideosComponent,
   CustomerGamesComponent,
   CustomerSearchWebComponent,
   CustomerShoppingComponent,
   CustomerEzCashOffersComponent,
   CustomerRewardLockerComponent,
   CustomerRedemptionHistoryComponent,
   CustomerTestimonialsComponent,
   CustomerLeaveTestimonialComponent,
   CustomerFaevaaLotteryComponent,
   CustomerRafflesComponent,
   CustomerMemberContestsComponent,
   CustomerMyWinsComponent,
   CustomerReferFriendsComponent,
   CustomerMyReferralHistoryComponent,
   CustomerRequestPaymentComponent,
   CustomerProfileComponent,
   SubmitTestimonialComponent,
} from 'Components/CustomerComponent';

const Customer = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>
         <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
         <Route path={`${match.url}/dashboard`} component={CustomerOverViewComponent} />
         <Route path={`${match.url}/offer-walls`} component={CustomerOfferWallsComponent} />
         <Route path={`${match.url}/survey-walls`} component={CustomerSurveyWallsComponent} />
         <Route path={`${match.url}/videos`} component={CustomerVideosComponent} />
         <Route path={`${match.url}/games`} component={CustomerGamesComponent} />
         <Route path={`${match.url}/search-web`} component={CustomerSearchWebComponent} />
         <Route path={`${match.url}/shopping`} component={CustomerShoppingComponent} />
         <Route path={`${match.url}/requestpayment`} component={CustomerRequestPaymentComponent} />
         <Route path={`${match.url}/ez-cach-offers`} component={CustomerEzCashOffersComponent} />
         <Route path={`${match.url}/reward-locker`} component={CustomerRewardLockerComponent} />
         <Route path={`${match.url}/redemption-history`} component={CustomerRedemptionHistoryComponent} />
         <Route path={`${match.url}/testimonials`} component={CustomerTestimonialsComponent} />
         <Route path={`${match.url}/leave-testimonial`} component={SubmitTestimonialComponent} />
         <Route path={`${match.url}/faevaa-lottery`} component={CustomerFaevaaLotteryComponent} />
         <Route path={`${match.url}/raffles`} component={CustomerRafflesComponent} />
         <Route path={`${match.url}/member-contests`} component={CustomerMemberContestsComponent} />
         <Route path={`${match.url}/my-wins`} component={CustomerMyWinsComponent} />
         <Route path={`${match.url}/refer-friends`} component={CustomerReferFriendsComponent} />
         <Route path={`${match.url}/my-referral-history`} component={CustomerMyReferralHistoryComponent} />
         <Route path={`${match.url}/profile`} component={CustomerProfileComponent} />
      </Switch>
   </div>
);

export default Customer;
