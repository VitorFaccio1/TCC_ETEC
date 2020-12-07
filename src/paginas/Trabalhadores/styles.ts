import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container2:{
        backgroundColor: '#FFFF',
        borderWidth: 20,
        borderColor: '#ffff',
        borderRadius:8,       
        margin: 10
      
               
    },
    container:{
        backgroundColor: '#FFFF',
        borderWidth: 20,
        borderColor: '#ffff',
        borderRadius:8,       
        margin: 10
               

    },

    perfil:{              
        padding:24     
    },

    avatar:{
        marginTop: -30,
        width:64,
        height:64,
        borderWidth:3,
        borderRadius: 50,
        borderColor:'black'
                
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

    botoes:{        
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56
    },

    rating:{
        position: 'absolute',
        marginLeft: 170,
        marginTop: -20
    },

    estrela:{
        borderWidth: 3,
        borderColor: 'yellow',
        borderRadius: 8
    },

    botaowpp:{
        backgroundColor: 'blue',
        borderRadius: 8,
        alignItems: 'center',    
        justifyContent: 'center',

    },

    textoContato:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 30,
        marginLeft: 30
    },

    botaoperfil:{
        backgroundColor: 'grey',
        borderRadius: 8,
        alignItems: 'center',    
        justifyContent: 'center',
    },

    textoperfil:{
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 20,
        marginLeft: 30
    },

})

export default styles;