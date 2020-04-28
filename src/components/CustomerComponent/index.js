/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

// ecommerce dashboard
const CustomerOverViewComponent = Loadable({
	loader: () => import("Routes/customer/dashboard"),
	loading: () => <RctPageLoader />,
});

const CustomerOfferWallsComponent = Loadable({
	loader: () => import("Routes/customer/offerwalls"),
	loading: () => <RctPageLoader />,
});

const CustomerSurveyWallsComponent = Loadable({
	loader: () => import("Routes/customer/surveywalls"),
	loading: () => <RctPageLoader />,
});

const CustomerVideosComponent = Loadable({
	loader: () => import("Routes/customer/videos"),
	loading: () => <RctPageLoader />,
});

const CustomerGamesComponent = Loadable({
	loader: () => import("Routes/customer/games"),
	loading: () => <RctPageLoader />,
});

const CustomerSearchWebComponent = Loadable({
	loader: () => import("Routes/customer/searchweb"),
	loading: () => <RctPageLoader />,
});

const CustomerShoppingComponent = Loadable({
	loader: () => import("Routes/customer/shopping"),
	loading: () => <RctPageLoader />,
});

const CustomerEzCashOffersComponent = Loadable({
	loader: () => import("Routes/customer/ezcashoffers"),
	loading: () => <RctPageLoader />,
});

const CustomerRewardLockerComponent = Loadable({
	loader: () => import("Routes/customer/rewardlocker"),
	loading: () => <RctPageLoader />,
});


const CustomerRedemptionHistoryComponent = Loadable({
	loader: () => import("Routes/customer/redemptionhistory"),
	loading: () => <RctPageLoader />,
});


const CustomerTestimonialsComponent = Loadable({
	loader: () => import("Routes/customer/testimonials"),
	loading: () => <RctPageLoader />,
});


const CustomerLeaveTestimonialComponent = Loadable({
	loader: () => import("Routes/customer/leavetestmonial"),
	loading: () => <RctPageLoader />,
});


const CustomerFaevaaLotteryComponent = Loadable({
	loader: () => import("Routes/customer/faevaalottery"),
	loading: () => <RctPageLoader />,
});


const CustomerRafflesComponent = Loadable({
	loader: () => import("Routes/customer/raffles"),
	loading: () => <RctPageLoader />,
});


const CustomerMemberContestsComponent = Loadable({
	loader: () => import("Routes/customer/membercontests"),
	loading: () => <RctPageLoader />,
});


const CustomerMyWinsComponent = Loadable({
	loader: () => import("Routes/customer/mywins"),
	loading: () => <RctPageLoader />,
});


const CustomerReferFriendsComponent = Loadable({
	loader: () => import("Routes/customer/referfriends"),
	loading: () => <RctPageLoader />,
});


const CustomerMyReferralHistoryComponent = Loadable({
	loader: () => import("Routes/customer/myreferralhistory"),
	loading: () => <RctPageLoader />,
});

const CustomerRequestPaymentComponent = Loadable({
	loader: () => import("Routes/customer/requestpayment"),
	loading: () => <RctPageLoader />,
});

const CustomerProfileComponent = Loadable({
	loader: () => import("Routes/customer/userprofile"),
	loading: () => <RctPageLoader />,
});

const SubmitTestimonialComponent = Loadable({
	loader: () => import("Routes/customer/submittestimonial"),
	loading: () => <RctPageLoader />,
});

export {
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
};
