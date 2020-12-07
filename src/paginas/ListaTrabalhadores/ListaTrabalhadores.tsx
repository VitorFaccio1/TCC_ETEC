import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import styles from "./styles";

import voltar from "../../assets/images/icones/voltar.png";
import Trabalhadores from "../Trabalhadores/trabalhadores";

function ListarTrabalhadores() {
  const navegar = useNavigation();

  function navegarParaPaginaAnterior() {
    navegar.navigate("Menu");
  }
  return (
    <ScrollView>
      {/*INTERFACE PARTE DE CIMA */}
      <View style={styles.geral}>
        <View style={styles.container}>
          <View style={styles.barra}>
            <BorderlessButton onPress={navegarParaPaginaAnterior}>
              <Image source={voltar}/>
            </BorderlessButton>

            <Text style={styles.texto}>Melhores trabalhadores</Text>
          </View>


          {/*BOTAO FILTRO 
          <View>
            <Text style={styles.text}>Serviço</Text>
            <TextInput style={styles.input} placeholder="Serviço" />
          </View>
          <View>
            <BorderlessButton style={styles.botaofiltrar}>
              <Text style={styles.textofiltrar}>Filtrar</Text>
            </BorderlessButton>
          </View>
          */}
        </View>

        {/*TRABALHADORES */}
        <ScrollView>
        <Trabalhadores/>        
        </ScrollView>

        
      </View>
    </ScrollView>
  );
}

export default ListarTrabalhadores;
