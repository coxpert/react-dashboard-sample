export const styles = () =>({
    shopItem:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center',
        float:'left',
        height: 56,
        minWidth: '75px',
        margin: 5,
        width: '140px',
        paddingTop: 7,
        paddingBottom:7,
        borderRadius: 5,
        border: '1px solid #ddd',
        boxShadow: '0px 2px 5px rgba(0,0,0,.3)',
        '@media (max-width: 630px)':{
            width: '80px',
            height: 50,
        },
        cursor:'pointer'
    },
    shopItemSelected:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',
        alignItems:'center',
        float:'left',
        height: 56,
        minWidth: '75px',
        margin: 5,
        width: '140px',
        paddingTop: 7,
        paddingBottom:7,
        borderRadius: 5,
        border: '1px solid #ddd',
        boxShadow: '0px 2px 5px rgba(0,0,0,.3)',
        '@media (max-width: 630px)':{
            width: '80px',
            height: 50,
        },
        backgroundColor:'#00000033',
        cursor:'pointer'
    },
    shopIconConainer:{
        display:'flex',
        justifyContent:'cener',
        alignItems:'flex-start',
    },
    shopName:{
        fontSize: '14px',
        fontWeight:'bold',
        color:'rgb(85, 154, 213)',
        '@media (max-width: 630px)':{
            fontSize:'10px'
        }
    },
    shopIcon:{
        maxWidth: '30px',
        maxHeight: '20px',
    },
    shopsWrapper:{
        backgroundColor:'white',
        marginTop: '2px'
    },
    iframe:{
        width: '100%',
        height: '100%',
        minHeight:'65vh',
    }
})