import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 35,
        marginRight: 15,
        justifyContent: 'space-between'
    },


    container2:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    registrar:{
        fontSize: 25,
        marginTop:10,
        marginLeft:110
        
    },

    texto:{
        marginTop: 25,
        color: 'grey',
        marginLeft: 15,
        fontSize: 16
    },

    email:{
        fontSize:20,
        marginTop: 20,  
        marginRight: 150     

    },

    senha:{
        fontSize:20,
        marginTop:15,
        marginRight: 150   
    },

    input:{
        borderWidth: 1.5,
        borderRadius: 8,
        marginTop:5,
        paddingLeft: 50,
        paddingRight: 50
    },
    
    botao:{
        backgroundColor: 'orange',
        marginTop: 25,
        borderRadius: 8,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 70,
        paddingRight: 70
    },

    textobotao:{
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'

    },

})

export default styles;