import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StatusBar } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import voltar from "../../assets/images/icones/voltarbranco.png";
import logo from "../../assets/images/logomenor.png";
import cadeado from "../../assets/images/icones/bloqueio.png";

function FacebookTB() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("Login");
  }

  function navegarParaTbVt() {

    navegar.navigate("tbvit");
  }

  return (
    <View>

        {/*BOTAO VOLTAR E TEXTO */}
      <View style={styles.voltar}>
        <BorderlessButton onPress={navegarParaLogin}>
          <Image source={voltar}></Image>
        </BorderlessButton>
        <Text style={styles.textoVoltar}>Entrar com o Facebook</Text>
      </View>

        {/*LOGO */}
      <View style={styles.logo}>
        <Image source={logo}></Image>
      </View>

        {/*TEXTO LOGO */}
      <View style={styles.textoview}>
        <Text style={styles.textologo}>HOME EASE</Text>
        <Text style={styles.texto}>receberá: Seu perfil público.</Text>
      </View>

        {/*DESCRICAO */}
      <View style={styles.descricaotexto}>
        <Image source={cadeado} />
        <Text style={styles.descricao}>
          Isso nao permite que o aplicativo publique no Facebook
        </Text>
      </View>

        {/*BOTOES */}
      <View>
        <BorderlessButton style={styles.botao} onPress={navegarParaTbVt}>
          <Text style={styles.textobotao}>Continuar como Vitor</Text>
        </BorderlessButton>
        <BorderlessButton style={styles.botaocancelar} onPress={navegarParaLogin}>
          <Text style={styles.cancelar}>Cancelar</Text>
        </BorderlessButton>
      </View>
      <StatusBar backgroundColor="#3900e6" />
    </View>
  );
}

export default FacebookTB;
