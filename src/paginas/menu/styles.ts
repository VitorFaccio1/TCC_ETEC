import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    topo:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 50
    },

    topo2:{
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
        marginStart: 20,
    },

    
    topo3:{
        fontSize: 30,
        fontWeight: "bold",
        marginStart: 5,
        flexDirection: 'row',
    },

    container: {
        backgroundColor: '#fff',
        justifyContent: "center",
        paddingTop: 40,
        paddingLeft:9,
        
    },

    logo:{
        marginLeft: 25
    },

    titulo:{        
        color: 'black',
        fontSize: 20,
        lineHeight: 30,
        marginTop:40,

    },

    tituloGrifado:{
        fontWeight: "bold"
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        margin: 5,
        marginBottom: 50
    },

    botao: {
        backgroundColor: '#FF8C00',
        height: 150,
        width: '48%',
        padding: 24,
        marginRight: 5,
        justifyContent: 'space-between',
        borderRadius: 8,  
           
    },

    fotoperfil:{
        borderRadius: 50,
        marginLeft: 170,
        alignSelf: "flex-end"
    },

    fotologo:{
        alignSelf: "center"
    },

    container2:{
        backgroundColor: "orange",
        marginTop: 100,
        flex: 1,
        flexDirection: "row",
    },

    textoBotao: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },

    textoBotao2: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'white',
    },




    

});

export default styles;