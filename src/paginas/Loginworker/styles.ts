import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  logo:{
    marginTop:35,
    alignItems: "flex-start",
    marginLeft: 30
  },

  homenome:{
    fontSize: 30,
    fontWeight: "bold"
  },

  cabecalho:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight:"bold",
    marginTop: 40
  },

    btfb:{
      backgroundColor: '#4000ff',
      borderRadius: 8,
      paddingLeft:15,
      flex: 1,
      flexDirection: "row",
      marginBottom: 0,
      marginTop: 0,
      alignSelf: "flex-start",
      justifyContent: 'center',
      alignItems: 'center'
    },

    vwfb:{
      backgroundColor: '#4000ff',
      marginLeft:30,
      marginRight:30,
      marginTop:40,
      height:55,
      borderRadius: 8,
      paddingLeft:15,
      shadowColor: 'rgba(0, 0, 0, 0.75)',
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 2
    },

    textofb:{
      color: 'white',
      fontSize:14,
      fontWeight: 'bold'
    },

    vwgg:{
      backgroundColor: '#fff',
      marginLeft:30,
      marginRight:30,
      marginTop:20,
      height:55,
      borderRadius: 8,
      paddingLeft:15,
      shadowColor: 'rgba(0, 0, 0, 0.75)',
      shadowOffset: {width: 1, height: 1},
      shadowRadius: 2
    },

    btgg:{
      backgroundColor: '#fff',
      borderRadius: 8,
      paddingLeft:15,
      flex: 1,
      flexDirection: "row",
      marginBottom: 0,
      marginTop: 0,
      alignSelf: "flex-start",
      justifyContent: 'center',
      alignItems: 'center'
    },

    textogg:{
      color: 'red',
      fontSize:14,
      fontWeight: 'bold'
    },

  linhaseparatoria:{
    marginLeft:30,
    marginRight:30,    
  },

  linhaseparatoria2:{
    marginLeft:30,
    marginRight:30,
    marginTop: 50,
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 20
  },

  botaoGoogle:{
    backgroundColor: '#0080ff',
    marginLeft:30,
    marginRight:30,
    marginTop:20,
    height:40,
    borderRadius: 8,
    paddingLeft: 15,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14

  },

  texto:{
    fontSize: 17
  },

  container: {
      borderColor: 'black',
      marginTop:20,
      borderBottomWidth:1,
      marginLeft: 30,
      marginRight: 30,
  },

  container2: {
    borderColor: 'black',
    borderBottomWidth:1.5,
    marginLeft: 30,
    marginRight:30,     
  },

  botao:{
    backgroundColor: '#FF8C00',
    height: 70,
    marginRight:30,
    marginLeft:25,
    marginTop:35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,   
  },

  botaowork:{
    backgroundColor: '#FF8C00',
    height: 50,
    marginRight:30,
    marginLeft:25,
    marginTop:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,   
  },

  botaoRegistrar:{
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  
  textoRegistrar:{
    color: '#0080ff',
    marginTop: 15,
    marginLeft: 30,
    fontSize:15,
    marginRight: 30
  },

  textobotao:{      
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20, 
  },

})

export default styles;