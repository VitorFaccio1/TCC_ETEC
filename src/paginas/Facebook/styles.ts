import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    voltar:{
        color: 'white',
        flexDirection: 'row',
        marginTop: 20,
        paddingLeft: 15,
        paddingRight:120,
        justifyContent: 'space-between',
        backgroundColor: '#3900e6',
        height: 58, 
        paddingTop: 15,
    },

    textoview:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 50,
        marginLeft: 80,
        marginTop: 5,
    },

    textologo:{
        fontSize: 15,
        fontWeight: 'bold',        
    },

    texto:{    
        alignItems: 'center',
        fontSize: 15
    },

    botaotexto:{

    },

    textoVoltar:{
        fontSize:20,
        color: 'white'
    },

    logo :{
        alignItems: 'center',
        marginTop: 125,
        maxWidth: 500,
    },
    
    descricaotexto:{
        marginTop:100,
        paddingLeft: 30,
        flexDirection: 'row'
    },

    descricao:{
        fontSize: 14,
        color: 'grey',     

    },

    botao:{
        backgroundColor: 'blue',
        marginTop:25,
        marginRight: 65,
        marginLeft: 65,
        height: 50,
    },

    textobotao:{
        paddingTop: 15,
        paddingLeft: 60,
        fontSize: 16,
        color: 'white'

    },

    botaocancelar:{
        marginTop:50,
        marginRight: 50,
        marginLeft: 50,
        height: 50,
    },

    cancelar:{
        paddingLeft: 130,
        color: 'grey',
        fontSize: 18

    },

});

export default styles;