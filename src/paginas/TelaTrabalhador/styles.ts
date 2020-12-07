import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    view:{
        backgroundColor: '#FFBE3B',
    },

    lista:{

    },

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
        marginTop: 50,
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

    container4:{
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



    sobre:{
        flexDirection: "row",
    },
    container2:{
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
        alignSelf: "center"
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
        justifyContent: 'space-between',
        height: 56,
        alignSelf: "center"
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
        width: 300

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



    

});

export default styles;