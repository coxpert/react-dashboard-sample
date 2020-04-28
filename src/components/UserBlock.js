/**
 * User Block
 */
import React from 'react';
import { withRouter, Link } from 'react-router-dom'

import {makeStyles } from '@material-ui/styles';
import {Box} from '@material-ui/core'

const useStyles = makeStyles(()=>({
    accountMenuBox:{
        width: '100%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    accountMenuContainer:{
        display: 'flex',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    accountMenuItem:{
        width: 150,
        height: 50,
        textAlign:'center',
        verticalAlign:'middle',
        backgroundColor:'#333366',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',fontWeight:'bold',
        borderLeft: 'solid 1px white',
        '@media (max-width: 670px)':{
            width: 'calc((100vw - 20px) / 4)',
            height: '40px',
            fontWeight: 400,
            fontSize:'12px'
        }
    },
    accountMenuItemActive:{
        width: 150,
        height: 50,
        textAlign:'center',
        verticalAlign:'middle',
        backgroundColor:'#58588d',
        borderLeft: 'solid 1px white',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',fontWeight:'bold',
        '@media (max-width: 670px)':{
            width: 'calc((100vw - 20px) / 4)',
            height: '40px',
            fontWeight: 400,
            fontSize:'12px'
        }
    }
}))

const menuItems = [
    {
        title: "Profile",
        link: "/customer/profile",
    },
    {
        title: "Redemption History",
        link: "/customer/redemption-history",
    },
    {
        title: "My Wins",
        link: "/customer/my-wins",
    },
    {
        title: "My Refferal History",
        link: "/customer/my-referral-history",
    }
]

const UserBlock =  (props) => {

    const { match } = props;
    const state = {
        username:"Lucile Beck",
        email:"info@email.com",
        profileImage: require('Assets/avatars/user-5.jpg'),
     }

    const classes = useStyles();

    return (
        <div className="userProfile-wrapper">
            <div className="profile-top">
                <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" className="img-fluid" width="1920" height="250" />
                <div className="profile-content">
                    <div className="media">
                        <img src={state.profileImage} alt="user profile" className="rounded-circle mr-20 bordered" width="100" height="100" />
                        <div className="media-body pt-25">
                            <div>
                                <h2>{state.username}</h2>
                                <p>{state.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Box className={classes.accountMenuBox}>
                    <Box className={classes.accountMenuContainer}>
                        {
                            menuItems.map((menu, index)=>(
                                <Link  key={index} to={menu.link}>
                                    <Box className={ ( match.url === menu.link ) ? classes.accountMenuItemActive : classes.accountMenuItem }>
                                        {menu.title}
                                    </Box>
                                </Link>
                            ))
                        }
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default  withRouter(UserBlock);
