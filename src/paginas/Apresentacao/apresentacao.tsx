import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import logo from "../../assets/images/logopng2.png";

function apresentacao() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("Login");
  }

  function navegarParaAbertura() {
    navegar.navigate("abertura");
  }

  return (
    <View style={styles.view}>

      <LinearGradient
        // Background Linear Gradient
        colors={['#FFBE3B', '#FFBE3B', '#FFBE3B', '#FFBE3B','#fff','#fff']}
        style={{
            position: "absolute",
            top: 30,
            left: 0,
            right: 0,
            bottom: 0,
            height: 800,
        }}
      />

      {/*BOTAO PULAR */}
      <BorderlessButton style={styles.botao} onPress={navegarParaLogin}>
        <Text style={styles.textobotao}>Pular</Text>
      </BorderlessButton>

      {/*TEXTO */}
      <View style={styles.viewTexto}>
        <Text style={styles.texto}>Bem-vindo ao Home Ease</Text>
      </View>

      {/*LOGO */}
      <View>
        <Image source={logo} style={styles.logo} />
      </View>

      {/*BOTAO PROXIMO */}
        <TouchableOpacity 
          style={styles.botaoproximo}
          onPress={navegarParaAbertura}>
          <Text style={styles.proximo}>Próximo</Text>
        </TouchableOpacity >
    </View>
  );
}

export default apresentacao;
