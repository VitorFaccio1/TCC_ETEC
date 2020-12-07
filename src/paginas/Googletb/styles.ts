import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({


     
    voltar:{
        marginTop: 30,
        marginLeft: 20
    },

    logo:{
        borderRadius: 47,
        marginLeft: 150
    },

    texto1:{
        fontSize: 25,
        marginLeft: 100
    },

    texto2:{
        fontSize: 17,
        marginLeft: 95
    },       

    botao:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:30,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 7,
        
    },
    
    botao2:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 7,
        
    },

    enfeite:{
        marginLeft: 30,
        marginRight: 30,
        color: 'grey'
    },

    perfil:{
        borderRadius: 50,
        marginTop: 20,
    },

    textoperfil:{        
        marginRight: 160,
        marginTop:20,
        marginLeft: 8,
        fontSize: 15

    },

    final:{
        fontSize: 15,
        color: 'grey',
        margin:30

    },

    botaocancelar:{
        marginTop:50,
        marginRight: 50,
        marginLeft: 50,
        height: 50,
    },

    cancelar:{
        marginLeft: 130,
        marginRight: 100,
        color: 'grey',
        fontSize: 18

    }, 


});

export default styles;