import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import voltar from "../../assets/images/icones/voltar.png";
import logo from "../../assets/images/logocirculo.png";
import perfil from "../../assets/images/perfil.png";
import perfilMaicon from "../../assets/images/perfilmaicon.png";


function GoogleTB() {
  const navegar = useNavigation();

  function navegarParaLogin() {
    navegar.navigate("logintb");
  }

  function navegarParaMenu() {
    navegar.navigate("tbvit");
  }

  return (
    <View>

      {/*BOTAO VOLTAR */}
      <View style={styles.voltar}>
        <BorderlessButton onPress={navegarParaLogin}>
          <Image source={voltar} />
        </BorderlessButton>
      </View>

    {/*LOGO */}
      <View >
        <Image source={logo} style={styles.logo} />
      </View>

    {/*TEXTO */}
      <View>
        <Text style={styles.texto1}>Escolha uma conta</Text>
        <Text style={styles.texto2}>para continuar no Home Ease</Text>
      </View>

    {/*BOTOES DE CONTAS*/}
      <View>
        <BorderlessButton style={styles.botao} onPress={navegarParaMenu}>
          <Image source={perfil} style={styles.perfil} />
          <Text style={styles.textoperfil}>Vitor Faccio        vitorfaccio6@gmail.com</Text>
        </BorderlessButton>
      </View>
      <Text style={styles.enfeite}>______________________________________________________</Text>
      
      <View>
        <BorderlessButton style={styles.botao2} onPress={navegarParaMenu}>
          <Image source={perfilMaicon} style={styles.perfil} />
          <Text style={styles.textoperfil}>Maicon Siqueira        maicon.siqera@gmail.com</Text>
        </BorderlessButton>
      </View>
      <Text style={styles.enfeite}>______________________________________________________</Text>

      <View>
        <Text style={styles.final}>
          Para continuar, o Google compartilhará seu nome, endereço de e-mail e foto de perfil com o app Home Ease.
        </Text>
      </View>
    {/*BOTAO CANCELAR */}
      <BorderlessButton style={styles.botaocancelar} onPress={navegarParaLogin}>
          <Text style={styles.cancelar}>Cancelar</Text>
        </BorderlessButton>
    </View>
  );
}

export default GoogleTB;
