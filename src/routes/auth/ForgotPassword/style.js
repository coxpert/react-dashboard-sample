import { makeStyles} from '@material-ui/styles';

export const useStyle = makeStyles(()=>({
    container: {
        position:'relative',
        display:'flex',
        justifyContent:'center',
        zIdex: 3,
    },
    wrapper: {
        marginTop: 200,
        paddingBottom: 30,
        maxWidth: 500,
    },
    brandContainer:{
        height: 80,
    },
    brand:{
        width: 80,
        height: 80,
        marginTop: 0,
    },
    input: {
        marginTop: 20,
        height: 60,
    },
    button:{
        marginTop: 20,
        height: 60,
        fontSize: 20,
        fontFamily:'Anton',
        fontWeight: 100,
    },
    textCenter:{
        textAlign:'center',
        margin: 0,
    },
    text:{
        fontSize: 20,
        textTransform:'capitalize',
        marginTop: 60,
        textAlign:'center',
        fontFamily:'Anton',
        fontWeight: 100,
        color: 'white',
    },

    smallLogoWrapper:{
        marginTop: 100,
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
        textAlign:'center',
        padding: 5,
        borderRadius: 5,
        boxShadow: '0px 2px 5px rgba(0,0,0,.5)',
    }
}))