/**
 * App Widgets
 */
import React from 'react';
import Loadable from 'react-loadable';
import PreloadWidget from 'Components/PreloadLayout/PreloadWidget';

const MyLoadingComponent = () => (
   <PreloadWidget />
)

const FaevaaCashBalance = Loadable({
   loader: () => import("./FaevaaCashBalance"),
   loading: MyLoadingComponent
});

const RefferralEarnings = Loadable({
   loader: () => import("./RefferralEarnings"),
   loading: MyLoadingComponent
})

const LifeTimeEarnings = Loadable({
   loader: () => import("./LifeTimeEarnings"),
   loading: MyLoadingComponent
})

const MyDealsWidget = Loadable({
   loader: () => import("./MyDealsWidget"),
   loading: MyLoadingComponent
})

const Rating = Loadable({
   loader: () => import("./Rating"),
   loading: MyLoadingComponent
})

const UserLevel = Loadable({
   loader: () => import("./UserLevel"),
   loading: MyLoadingComponent
})

const RemainingTime = Loadable({
   loader: () => import("./RemainingTime"),
   loading: MyLoadingComponent
})

export {
   MyDealsWidget,
   LifeTimeEarnings,
   RefferralEarnings,
   FaevaaCashBalance,
   Rating,
   UserLevel,
   RemainingTime,
}

