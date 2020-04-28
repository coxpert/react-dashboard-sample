
export const useStyle  = (theme)=>({
    root: {
        width: '100%',
        minHeight: '100vh',
        color: 'white',
        position:'relative',
        zIndex: 3,
    },
    container:{
        display: 'flex',
        minHeight: '100vh',
        alignItems:'center',
        flexWrap: 'wrap',
        flexDirection:'column',
        justifyContent:'flex-end',
        paddingBottom:50,
    },
    logoWrapper:{
        display:'flex',
        width: '100%',
        marginTop: 20,
    },
    brand:{
        width:80,
        height: 80,
        marginTop: 20,
    },
    signUpBox:{
        padding: theme.spacing(2),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        border:'solid 1px white',
        borderRadius: 10,
        marginTop:30,
        zIndex: 2,
    },
    leftBox:{
        width: 'calc(50% - 5px)',
        '@media (max-width: 780px)' : {
            width: 'calc(100% - 5px)',
          }
    },
    rightBox:{
        width: 'calc(50% - 5px)',
        '@media (max-width: 780px)' : {
            width: 'calc(100% - 5px)',
          }
    },
    typo1:{
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        padding: theme.spacing(1),
        lineHeight: '40px',
        '@media (max-width: 780px)' : {
            fontSize: 24,
            textAlign:'center',
            width:'100%'
          }
    },
    typo2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: theme.spacing(1),
        textAlign:'right',
        lineHeight: '40px',
        textDecoration: 'none',
        cursor:'pointer',
        '@media (max-width: 780px)' : {
            width: '100%',
            fontSize: 18,
            textAlign:'center',
          }
    },
    isAgreePolicy:{
        color: 'white',
        marginLeft: 10,
    }
    ,
    isAgreeConditions:{
        color:'white',
        marginLeft: 10,
    },
    activateButton:{
        height: 50,
        marginTop: 20,
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        '@media (max-width: 780px)' : {
            width: 'calc(100%)',
            fontSize: 16,
          }
    },
    smallLogoWrapper:{
        marginTop: 20,
        textAlign: 'center',
    },
    smallLogo:{
        height: 50,
    },
    typo3:{
        backgroundColor:'white',
        fontSize:16,
        fontWeight:'bold',
        color:'#4260b1',
        marginTop:10,
        textAlign:'center',
        padding: 5,
        borderRadius: 5,
        boxShadow: '0px 2px 5px rgba(0,0,0,.5)',
    }
})