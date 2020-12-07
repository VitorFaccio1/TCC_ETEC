import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    logo:{
        flexDirection: 'row',
        marginTop:30,
        marginLeft:15,
        justifyContent: 'space-between',
        marginRight: 15
        
    },
    banner:{
        borderColor: 'grey',
        borderWidth:3,
        marginTop: 5,
        position: 'relative'
    },

    perfil: {
        marginLeft: 150,
        position: 'absolute',
        marginTop: -50,
        borderRadius:50
              
    },

    profissao:{
        color:'blue',
        fontSize: 18,
        fontWeight:'bold'
    },

    rating:{
        marginTop: 35,
        marginRight: 225
    },

    estrela:{
        borderWidth: 3,
        borderColor: 'yellow',
        borderRadius: 8
    },

    viewdescricao:{
        marginLeft: 15
    },

    nome:{
        marginTop: 15,
        marginRight: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },

    curiosidades:{
        fontSize: 15,                
    },

    cidade:{
        fontSize: 15
    },

    container:{
        backgroundColor: '#FFFF',
        borderWidth: 20,
        borderColor: '#ffff',
        borderRadius:8,       
        margin: 15,
    },

    sobreContainer:{
        fontSize: 18,
        fontWeight: 'bold'
    },

    descricaoContainer:{
        fontSize: 15        
    },

    botaowpp:{
        backgroundColor: '#04d361',
        borderRadius: 8,
        alignItems: 'center',    
        justifyContent: 'center',
        margin:20,
        height:60

    },

    textoContato:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 30,
        marginLeft: 30
    },
})
    
export default styles