import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import voltar from "../../assets/images/icones/voltar.png";
import logo from "../../assets/images/LogoEscritoMaior.png";

function Esqueceu() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("Login");
  }

  function alerta() {
    alert("Enviamos uma redefinição de senha para seu e-mail !");
  }

  return (
    <View>
      {/*BOTAO VOLTAR E LOGO */}
      <View style={styles.container}>
        <BorderlessButton onPress={navegarParaLogin}>
          <Image source={voltar}></Image>
        </BorderlessButton>
        <Image source={logo}></Image>
      </View>

      {/*TEXTO PRINCIPAL*/}
      <Text style={styles.esquecer}>Esqueceu sua senha?</Text>

      {/*TEXTO SECUNDARIO */}
      <Text style={styles.texto}>
        Não tem problema! Só precisamos do e-mail que você usou ao criar seu
        cadastro no Home Ease
      </Text>

      {/*TEXTO EMAIL */}
      <Text style={styles.email}>E-mail de cadastro</Text>

      {/*INPUT DE TEXTO*/}
      <TextInput
        style={styles.input}
        placeholder="  Digite seu e-mail de cadastro"
      ></TextInput>

      {/*BOTAO REDEFINIR SENHA */}
      <BorderlessButton style={styles.botao} onPress={alerta}>
        <Text style={styles.textobotao}>Redefinir a senha</Text>
      </BorderlessButton>
    </View>
  );
}

export default Esqueceu;
