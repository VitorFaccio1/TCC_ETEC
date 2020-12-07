import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    botao:{
        marginTop: 40,
        marginLeft: 325
    },

    textobotao:{
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: "center",
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2
    },

    view:{
        backgroundColor: '#FFBE3B',
        alignItems: 'center',
        justifyContent: 'center',
    },

    viewTexto:{
        marginTop: 55,      
    },

    texto:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: "center",
        marginLeft: 29,
        marginRight: 29,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2
    },

    logo:{
        marginLeft: 30,
        marginTop: 40,
        maxHeight: 700
    },

    viewproximo:{
        marginBottom: 50
    },

    botaoproximo:{
        elevation: 2,
        backgroundColor: "orange",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 300,
        marginTop: 60
    },

    proximo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: "center"
    }

});

export default styles;