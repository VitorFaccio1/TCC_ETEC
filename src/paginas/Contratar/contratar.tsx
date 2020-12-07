import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import Enviar from "../../assets/images/icones/enviar.png";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";


import voltar from "../../assets/images/icones/voltar.png";
import styles from "./styles";

function Contratar() {
  const { goBack } = useNavigation();

  function voltarParaPaginaAnterior() {
    goBack();
  }

  function alerta() {
    alert(
      "Seu pedido será publicado em alguns minutos..."
    );
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.logo}>
        <BorderlessButton onPress={voltarParaPaginaAnterior}>
          <Image source={voltar} />
        </BorderlessButton>

        <Text style={styles.titulo}>Pedir Serviço</Text>

      </View>
      <Text style={styles.nome}>Nome:</Text>
      <TextInput style={styles.input} placeholder="Informe seu nome completo" />
      <Text style={styles.nome}>Serviço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o serviço que precisa"
      />
      <Text style={styles.nome}>Descrição:</Text>
      <TextInput style={styles.inputdesc} placeholder="Descreva seu problema ou sobre o serviço que necessita" />
      <Text style={styles.nome}>Whatsapp para contato:</Text>
      <TextInput style={styles.input} placeholder="(DDD) + Número" />
    

      <BorderlessButton style={styles.botao} onPress={alerta}>
        <Image source={Enviar} />
        <Text style={styles.textoBotao}>Enviar</Text>
      </BorderlessButton>
    </View>
    </ScrollView>
  );
}

export default Contratar;
