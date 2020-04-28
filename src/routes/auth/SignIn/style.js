

export const useStyle  = ()=>({
    container:{
        position:'relative',
        display:'flex',
        justifyContent:'center',
        zIdex: 3,
    },
    wrapper: {
        marginTop: 100,
        paddingBottom: 30,
        maxWidth: 400,
    },

    button: {
        height: 50,
        fontSize: 20,
        marginTop: 20,
        fontFamily:'Anton',
        fontWeight:100,
    },
    button2: {
        height: 50,
        fontSize: 20,
        fontFamily:'Anton',
        fontWeight:100,
    },
    username: {
        height: 50,
        fontSize: 24,
    },
    password: {
        height: 50,
        fontSize: 24,
        marginTop: 20,
    },
    switchgroup:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        color: 'white',
        fontSize: 20,
        marginTop: 30,
    },
    switch:{
        padding:'5px',
        borderRadius: '9999px',
    },
    text1: {
        fontFamily:'Anton',
        fontSize: 16,
        paddingLeft:20,
        marginTop: 20,
        marginBottom: 10,
        color:'white',
    },
    text2: {
        fontFamily:'Anton',
        fontSize: 16,
        textDecoration: 'underline',
        paddingLeft:20,
        marginTop: 10,
        marginBottom: 10,
        textAlign:'right',
        paddingRight:20,
        color:'white',
        letterSpacing: 1,
    },
    text3:{
        fontFamily:'Anton',
        fontSize: 20,
        color:'white',
    },
    text4:{
        fontFamily:'Anton',
        marginTop: 50,
        fontSize: 18,
        textAlign:'center',
        color:'white',
    },
    brandContainer:{
    },
    brand:{
        width: 80,
        height: 80,
    },
    smallLogoWrapper:{
        marginTop: 30,
        textAlign:'center',
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
        padding: 5,
        borderRadius: 5,
        boxShadow: '0px 2px 5px rgba(0,0,0,.5)',
        textAlign:'center',
    }
});