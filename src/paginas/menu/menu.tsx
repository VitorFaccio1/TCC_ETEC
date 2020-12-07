import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import logo from "../../assets/images/logopng2.png";
import fotoperfil from "../../assets/images/perfil.png";
import lista from "../../assets/images/icones/lista.png";
import trabalhar from "../../assets/images/icones/trabalhar.png";


function Menu() {

  const navegar = useNavigation();

    function navegarParaPaginaListarTrabalhadores() {
      navegar.navigate("ListaTrabalhadores");
    }

    function navegarParaPaginaContratar() {
      navegar.navigate("Contratar");
    }

  return (
    <View>

      <View style={styles.topo3}>
        <Text style={styles.topo2}>Olá Vitor</Text>
        <Image style={styles.fotoperfil} source={fotoperfil} />
      </View>

        {/*BOTAO CONTRATAR E TRABALHAR*/}

        <Image style={styles.fotologo} source={logo} />

        <View style={styles.botoes}>
          <BorderlessButton
            style={styles.botao}
            onPress={navegarParaPaginaContratar}>
              <Image source={lista} />
              <Text style={styles.textoBotao}>Fazer pedido</Text>
          </BorderlessButton>
          
          <BorderlessButton
            onPress={navegarParaPaginaListarTrabalhadores}
            style={styles.botao}>
              <Image source={trabalhar} />
              <Text style={styles.textoBotao2}>Melhores classificados</Text>
          </BorderlessButton>
        </View>

    </View>
  );
}

export default Menu;
