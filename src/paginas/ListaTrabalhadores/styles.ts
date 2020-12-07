import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {   
        padding: 40,
        backgroundColor:'orange',   
        paddingTop:50
    },
    
    barra:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    texto: {
        fontSize:24,
        fontWeight: 'bold',
        color: 'white'
    },

    geral:{

    },

    container2:{
        backgroundColor: '#FFFF',
        borderWidth: 20,
        borderColor: '#ffff',
        borderRadius:8,       
        margin: 10,
               
    },

    perfil:{              
        padding:24     
    },

    avatar:{
        marginTop: -30,
        width:64,
        height:64,
                
    },

    perfildescricao:{
        marginLeft: 6,
    },

    nome:{
        marginTop: -20,
        fontWeight: 'bold',
        fontSize: 20, 
        alignItems: "center"     
    },

    servico:{
        color:'blue',
        fontSize: 18,
        fontWeight: "bold"

    },  

    bio:{
        fontSize: 16,      
        color:'#6a6180',
        marginLeft: 5 
    },

    footer:{
        padding:24,
        alignItems:'center'
    },

    preco:{
        fontSize: 16,
        color: '#6a6180'
    },

    precovalor:{
        fontSize: 25,
        color: 'red'
    },

    botao:{
        backgroundColor: '#04d361',
        height:56,
        borderRadius: 8,
        alignItems: 'center',    
        justifyContent: 'center'
    },

    botaoContato:{
        flexDirection: 'row',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 28,
        marginTop: -21
    },
    text:{
        fontSize: 18,
        color: 'white'


    },

    input:{
        height: 54,
        backgroundColor: 'white',
        borderRadius:8,
        justifyContent: 'center',
        paddingHorizontal:16 ,
        marginTop: 4,
        
    },

    textofiltrar:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    botaofiltrar:{
        backgroundColor: 'blue',
        height:56,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20,  
        alignItems:'center'       
    }

})

export default styles;