import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 35,
        marginRight: 15,
        marginLeft: 15,

    },
    esquecer:{
        fontSize:25,
        paddingTop:20,
        marginLeft: 75,    
    },

    texto:{
        fontSize:15,
        color: 'grey',
        marginLeft: 30,
        marginTop:25
    },

    email:{
        marginLeft: 30,
        marginTop:30,
        fontWeight: 'bold',
        fontSize:17,
    },

    input:{       
        borderColor: 'black',
        borderWidth: 1.5,
        marginLeft: 30,
        marginRight: 30,    
        borderRadius: 8,   
        marginTop:3
    },

    botao:{
        marginTop: 15,
        backgroundColor: 'orange',
        marginRight: 250,
        marginLeft: 30,
        height:40,
        justifyContent: 'center',  
        alignItems: 'center',
        borderRadius: 4,   
 
    },

    textobotao:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
})

export default styles;