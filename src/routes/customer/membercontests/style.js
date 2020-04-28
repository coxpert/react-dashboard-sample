export const styles = {
    root: {
        width: '100%',

    },
    headerBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#0f8eb7',
        textAlign:'center',
        padding: 50,
        flexDirection:'row',
        position:'relative',
        '@media (max-width : 600px)':{
            flexDirection:'column',
        }
    },
    overText:{
        color:'white',
        fontFamily:'Anton',
        fontSize: 40,
    }
}