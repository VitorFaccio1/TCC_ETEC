import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import voltar from "../../assets/images/icones/voltar.png";
import logoEscritoMaior from "../../assets/images/LogoEscritoMaior.png";

function Registrar() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("Login");
  }

  function alerta(){
    alert('Sua conta foi criado com sucesso!')
  }

  return (
    <View>
      {/*BOTAO VOLTAR E LOGO*/}
      <View style={styles.container}>
        <BorderlessButton onPress={navegarParaLogin}>
          <Image source={voltar}></Image>
        </BorderlessButton>
        <Image source={logoEscritoMaior} resizeMode="contain" />
      </View>

      {/*TEXTO REGISTRAR*/}
      <Text style={styles.registrar}>Registre-se já</Text>

      {/*TEXTO*/}
      <Text style={styles.texto}>
        Faça uma conta no Home Ease agora e nunca mais precisará perder tempo
        procurando profissionais! Todos os profissionais e de todos os tipos de
        serviços você encontra aqui!
      </Text>
      <View style={styles.container2}>
        {/*TEXTO EMAIL*/}
        <Text style={styles.email}>E-mail:</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
        ></TextInput>

        {/*TEXTO SENHA*/}
        <Text style={styles.senha}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
        ></TextInput>

        {/*BOTAO REGISTRAR*/}
        <BorderlessButton style={styles.botao} onPress={alerta}>
          <Text style={styles.textobotao}>Registrar</Text>
        </BorderlessButton>
      </View>
    </View>
  );
}

export default Registrar;
