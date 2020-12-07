import React from "react";
import { Image, View, ScrollView, Text } from "react-native";
import { Linking } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {AirbnbRating } from 'react-native-elements';
import styles from "./styles";

import banner from "../../assets/images/bannerGabriel.png";
import perfil from "../../assets/images/gabrielPerfil.png";
import voltar from "../../assets/images/icones/voltar.png";
import logo from "../../assets/images/LogoEscritoMaior.png";
import whatsapp from "../../assets/images/icones/whatsapp.png";


function PerfilGabriel() {

  const navegar = useNavigation();

  function navegarParaTrabalhadores() {
    navegar.navigate("ListaTrabalhadores");
  }
  return (
    <ScrollView>
      <View>
        {/*LOGO E BOTAO VOLTAR */}
        <View style={styles.logo}>
          <BorderlessButton onPress={navegarParaTrabalhadores}>
            <Image source={voltar} />
          </BorderlessButton>
          <Image source={logo} />
        </View>

        {/*CAPA DE FUNDO*/}
        <View>
          <Image style={styles.banner} source={banner} />
        </View>

        {/*PERFIL */}
        <View>
          <Image style={styles.perfil} source={perfil} />
        </View>

      {/*RANKING */}
        <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"]}
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

        {/*TEXTO DESCRICAO*/}
        <View style={styles.viewdescricao}>
          <Text style={styles.nome}>Gabriel Câmara</Text>
          <Text style={styles.profissao}>Programador</Text>
          <Text style={styles.curiosidades}>
          Entusiasta de tecnologia e plantas
            
            
          </Text>
          <Text style={styles.cidade}>Araraquara, São Paulo, Brasil </Text>
        </View>

        {/*SOBRE*/}
        <View style={styles.container}>
          <Text style={styles.sobreContainer}>Sobre</Text>
          <Text style={styles.descricaoContainer}>
          Admirador de tecnologia nas horas livres, procuro trabalho como cuidador de jardim através desse aplicativo,
          enquanto não encontro trabalho fixo          
          </Text>
        </View>

        {/*FORMAÇOES ACADEMICAS*/}
        <View style={styles.container}>
          <Text style={styles.sobreContainer}>
            Serviços que também sei fazer
          </Text>
          <Text style={styles.descricaoContainer}>•Manutenção de computador</Text>
          <Text style={styles.descricaoContainer}>•Pintor</Text>
        </View>

        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516991413419?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
      </View>
    </ScrollView>
  );
}

export default PerfilGabriel;
