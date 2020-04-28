
export const useStyle = ()=>({

    root:{
        width: '100%',
        height: '100%',
    },

    header:{
        width: '100%',
        minHeight: '100vh',
        color: 'white',
        position:'relative',
        paddingBottom: 100,
    },

    logoContainer:{
        paddingTop: 40,
        display: 'flex',
        width:'100%',
        justifyContent:'flex-end',
    },
    logo:{
        zIndex: 3,
    },
    container:{
        minHeight: '100vh',
    },
    signin:{
        width: 150,
        letterSpacing: 2,
        fontSize: 16,
        zIndex: 3,
    },
    signinSm:{
        width: 100,
        marginTop: 8,
        zIndex: 3,
    },
    wrapper:{
        display:'inline-block',
        paddingTop: 20,
        paddingBottom: 50,
        width:'100%',
        maxWidth: 1000,
        margin: 'auto',
    },
    leftBox:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        minHeight:'500px',
        float:'left',
        marginTop: 50,
        width:'100%',
        alignItems:'flex-start',
        '@media (max-width: 960px)' : {
            alignItems:'center',
        }
    },
    evenBottomImage:{
        position:'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 2000,
        zIndex: 2,
        '@media (max-width: 960px)' : {
            width: '200%',
            fontSize: 24,
            textAlign:'center',
            maxWidth: 1650,
        }
    },
    title:{
        fontSize: 40,
        fontFamily: 'Anton',
        textAlign: 'left',
        color: 'white',
        '@media (max-width: 960px)' : {
            textAlign:'center',
        }
    },
    rightBox: {
        backgroundColor: '#ffffff66',
        borderRadius: 20,
        width: '100%',
        minHeight:'500px',
        float:'right',
        position:'relative',
        zIndex: 3,
    },

    bannerGridBox: {
        width: '100%',
        display: 'flex',
    },

    topRightBox:{
        width: 100,
        height: 50,
        position:'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'transparent',
        '@media (max-width: 480px)' : {
            width: 60,
            top: -25,
        }
    },

    badgeImage:{
        width: '100%',
    },

    rightBoxContent:{
        backgroundColor:'transparent',
        width: '100%',
        height: '100%',
        minHeight:'500px',
        padding: 30,
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        position: 'relative',
        background: 'transparent',
        backgroundClip: 'padding-box',
        border: 'solid 5px transparent',
        borderRadius: 20,
        '&::before':{
            content:'',
            position:'absolute',
            top: 0, right: 0, left: 0, bottom: 0,
            borderRadius: 20,
            background: 'black'
        }

    },
    rightTitle:{
        color: 'white',
        fontFamily: 'Anton',
        textAlign: 'center',
        fontSize: 34,
    },
    rightSubTitle:{
        color: 'white',
        fontFamily: 'Anton',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
    },
    facebookbutton:{
        marginTop: 10,
        marginBottom: 10,
    },
    joinButton:{
        height: 50,
        width: '80%',
        fontSize: 24,
        maxWidth:400,
        marginTop: 10,
    },

    policyText:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
    },   
})

