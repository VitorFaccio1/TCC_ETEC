import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";


import { EvilIcons } from '@expo/vector-icons';




function Login() {
  const navegar = useNavigation();

  function navegarParaMenu() {
    navegar.navigate("Menu");
  }

  function navegarParaRegistro() {
    navegar.navigate("Registrar");
  }

  function navegarParaEsqueceu() {
    navegar.navigate("Esqueceu");
  }

  function navegarParaLoginTrabalhador() {
    navegar.navigate("logintb");
  }

  function navegarParaFace() {
    navegar.navigate("Facebook");
  }

  function navegarParaGoogle(){
    navegar.navigate("Google")
  }

  return (
    <View>
      {/*CABEÇALHO */}
      <View style={styles.logo}>
        <Text style={styles.homenome}>Home Ease</Text>
      </View>
      <Text style={styles.cabecalho}>Entre como cliente</Text>

      {/*ENTRE COM FACEBOOK, GMAIL*/}
      <View>
        <View style={styles.vwfb}>
        <TouchableOpacity style={styles.btfb} onPress={navegarParaFace}>
        <EvilIcons name="sc-facebook" size={30} color="white" />
          <Text style={styles.textofb}>
            CONECTAR COM FACEBOOK
          </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.vwgg}>
        <TouchableOpacity style={styles.btgg} onPress={navegarParaGoogle}>
          <EvilIcons name="sc-google-plus" size={30} color="red" />
          <Text style={styles.textogg}>
            CONECTAR COM O GOOGLE
          </Text>
        </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.linhaseparatoria2}>
        Logar pelo Email
      </Text>

      {/*LOGIN EMAIL E SENHA*/}
      <View style={styles.container}>
        <Text style={styles.texto}>E-Mail:</Text>
        <TextInput placeholder="Digite seu e-mail"
        ></TextInput>
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto}>Senha:</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Digite sua senha"
        ></TextInput>
      </View>

      {/*BOTAO ENTRAR */}
      <View>
        <BorderlessButton style={styles.botao} >
          <Text style={styles.textobotao} onPress={navegarParaMenu}>
            ENTRAR
          </Text>
        </BorderlessButton>

        {/*BOTAO REGISTRE-SE E ESQUECEU SUA SENHA? */}
        <View style={styles.botaoRegistrar}>
          <BorderlessButton onPress={navegarParaRegistro}>
            <Text style={styles.textoRegistrar}>Registre-se</Text>
          </BorderlessButton>
          <BorderlessButton onPress={navegarParaEsqueceu}>
            <Text style={styles.textoRegistrar}>Esqueceu sua senha?</Text>
          </BorderlessButton>
        </View>

        <BorderlessButton style={styles.botaowork} >
          <Text style={styles.textobotao} onPress={navegarParaLoginTrabalhador}>
            ENTRAR COMO TRABALHADOR
          </Text>
        </BorderlessButton>

      </View>
    </View>
  );
}

export default Login;
