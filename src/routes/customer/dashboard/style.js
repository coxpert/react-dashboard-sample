import { Hidden } from "@material-ui/core";

export const styles = {
    mainContainer:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
        height:'100%',
        backgroundColor:'white',
        marginBottom:20,
    },
    leftContainer:{
        display:'flex',
        flexDirection:'column',
        width: '70%',
        height:'100%',
        paddingBottom: 10,
        '@media (max-width:900px)':{
            width: '100%',
        }
    },
    rightContainer:{
        display:'flex',
        flexDirection:'column',
        width: '30%',
        backgroundColor:'rgb(224, 234, 218)',
        padding:10,
        '@media (max-width:900px)':{
            display: 'none',
        }
    },
    myDealsTitle:{
        width: 150,
        color:'white',
        textAlign:'center',
        backgroundColor: 'rgb(198, 81, 39)',
        paddingTop: 5,
        boxShadow:'0 -3px 6px 0px rgba(0, 0, 0, 0.3)',
        boxShadowBottome: 'none',
        padding: 5,
        position:'relative',
        zIndex: 3,
        fontSize: 18,
        borderRadius: '5px 5px 0 0',
    },
    myDeals:{
        display:'flex',
        color:'white',
        textAlign:'center',
        backgroundColor: 'rgb(198, 81, 39)',
        padding:10,
        width: '100%',
        boxShadow:'0 0 6px 3px rgba(0, 0, 0, 0.5)',
        marginTop: -4,
        position:'relative',
        zIndex: 2,
        borderRadius: '0 5px 5px 5px',
    },
    myDealsContent:{
        backgroundColor:'white',
        width: '100%',
    },
    slideControll:{
        height: 30,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'rgb(110, 111, 112)',
        marginRight: 5,
        marginLeft: 20,
    },
    navButton:{
        cursor:'pointer',
        width: 20,
        height: 20,
        backgroundColor:'rgb(104, 139, 96)',
        marginLeft: 5,
    },
    alsoLike:{
        width: 'calc(100% - 20px)',
        color:'rgb(202, 119, 39)',
        fontSize: 20,
        paddingBottom: 10,
        textAlign:'left',
        paddingLeft:10,
        margin:10,
        borderBottom: 'solid 2px rgb(202, 119, 39)',
    },
    mostPopularOfferContainer:{
        display:'flex',
        width:'100%',
        marginTop:20,
        marginBottom:20,
    },
    whatsNew:{
        display:'flex',
        width:'100%',
        marginTop:20,
        marginBottom:20,
    }
}