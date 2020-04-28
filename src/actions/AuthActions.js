

import { NotificationManager } from 'react-notifications';
import {
   LOGIN_USER_SUCCESS,
   LOGOUT_USER,
} from 'Actions/types';


export const signIn = (user, history) => (dispatch) =>{
   if(user.email === 'demo@faevaapay.com' && user.password === "1234"){
      localStorage.setItem('user_id', user.email),
      dispatch({type: LOGIN_USER_SUCCESS,  payload: localStorage.getItem('user_id')});
      history.push('/');
      NotificationManager.success('User Login Successfully!');
   }else{
      NotificationManager.error('User Login Faild');
   }
}

export const signOut = ( history ) => (dispatch) =>{
   dispatch({ type: LOGOUT_USER });
   localStorage.removeItem('user_id');
   NotificationManager.success('User Logout Successfully');
   history.push('/');
}

