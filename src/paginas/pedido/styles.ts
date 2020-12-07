import { useMemo } from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    logo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:40,
        marginLeft: -34   
    },    

    titulo:{
        fontWeight: 'bold',
        fontSize:30,
        marginBottom: 10,
    },

    nome: {
        color: '#5c8599',
        fontSize: 24,
        borderBottomColor: '#D3E2E6',
        marginTop: 10
    },
    
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.6,       
        borderRadius: 20,
        height: 50,  
        fontSize:20,
        padding:5       
      },

    botao:{
        backgroundColor: 'blue',
        height: 100,        
        padding: 24,
        marginTop: 80,
        marginLeft:15,
        alignItems: "center",
        borderRadius: 8,       
    },
    
    textoBotao:{
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default styles;