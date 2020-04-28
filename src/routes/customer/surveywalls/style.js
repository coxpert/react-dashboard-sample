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
    },
    surveyHeader: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
        paddingBottom: 40,
        background: '#afafaf',
        alignItems: 'baseline',
        textShadow: '2px 2px 2px rgba(0,0,0,.3)',
        color: 'white',
    },
    surveyHeaderCaption: {
        fontSize: 32,
        fontWeight: 700,
        color: 'white',
        marginRight: 20,
    },
    surveyListWrapper:{
        maxWidth: 1000,
        margin: 'auto',
        marginTop: -30,
    },
    surveyListHeader: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        padding: '10px 20px',
        border: '1px solid #d4d4d4',
        color: 'white',
        background: 'gray',
        borderRadius: 6,
        boxShadow: '1px 1px 5px rgba(0,0,0,0.5)',
    },
    surveyListHeaderCategory: {
        fontSize: 20,
        '@media (max-width: 480px)':{
            fontSize: 14,
        },
    },
    surveyWarnging: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    faqContainer:{
        width: '95%',
        margin: 'auto',
        marginBottom: 40,
        padding: '30px 40px',
        border: '1px solid grey',
        borderRadius: 5,
        boxShadow: '0px 4px 4px rgba(0,0,0,.3)',
    },
    faqCaption:{
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 30,
    },
    faqWrapper: {
        width: '90%',
        margin: 'auto',
    },
    faqItemWrapper: {
        padding: '0 10px',
        '@media (max-width: 960px)': {
            padding: '20px 0',
        },
    },
    faqItemWrapperCenter: {
        padding: '0 10px',
        borderRight: '1px dashed grey',
        borderLeft: '1px dashed grey',
        '@media (max-width: 960px)': {
            border: 'none',
            borderTop: '1px dashed grey',
            borderBottom: '1px dashed grey',
            padding: '20px 0',
        }
    },
    faqQuestion: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 700,
    },
})