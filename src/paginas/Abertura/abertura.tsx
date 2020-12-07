import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

import logo from "../../assets/images/logoequipe2.png";

function abertura() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("Login");
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
      {/*TEXTO */}
      <View style={styles.viewTexto}>
        <Text style={styles.texto}>
          Contrate trabalhadores sem sair de casa
        </Text>
      </View>

      {/*LOGO */}
      <View>
        <Image source={logo} style={styles.logo} />
      </View>

      {/*BOTAO PROXIMO */}
        <TouchableOpacity 
          style={styles.botaoproximo}
          onPress={navegarParaLogin}>
          <Text style={styles.proximo}>Começar</Text>
        </TouchableOpacity >
    </View>
  );
}

export default abertura;
