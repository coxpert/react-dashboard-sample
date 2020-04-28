import Autosuggest from "react-autosuggest";

export const styles = {
    mainContainer:{
        width: '100%',
    },
    recentFeedbackBox:{
        minHeight:250,
        minWidth: 300,
        width:'50%',
        margin:'auto',
        marginBottom: 20,
        backgroundColor:'white',
        boxShadow:'0 0 2px 1px #00000033',
        padding: 20,
        '@media (max-width: 760px)':{
            padding: 5,
        }
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 10,
        '@media (max-width: 760px)':{
            width: 40,
            height: 40,
        }
    },
    title:{
        textAlign:'center',
        fontSize: 24,
    },
    recentBox:{
        padding: '10px 0px',
        display:'flex',
        alignItems:'center',

    },
    recentBox1:{
        padding: '10px 0px',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    ratingBox:{
        color:'gold',
        display:'flex',
        justifyContent:'center',
    },
    testimonialItem:{
        margin: 5,
        backgroundColor:'white',
        boxShadow:'0 0 4px 1px #00000033',
        display:'flex',
        flexDirection:'column',
        borderRadius:5,
        padding: 10,
    },
    showMoreContainer:{
        display:'flex',
        justifyContent:'center',
        marginTop: 20,
    },
    totalWrapper: {
        maxWidth: 960,
        margin: 'auto',
        marginBottom: 30,
    }
}