import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient';
import { Linking } from "react-native";

import fotoperfil from "../../assets/images/perfil.png";
import whatsapp from "../../assets/images/icones/whatsapp.png";
import maicon from '../../assets/images/maicon.png'
import gabriel from '../../assets/images/gabrielLista.png';


function TrabalhadorVitor() {

  const navegar = useNavigation();

    function navegarParaPaginaListarTrabalhadores() {
      navegar.navigate("ListaTrabalhadores");
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

<ScrollView>

      <View style={styles.topo3}>
        <Text style={styles.topo2}>Olá Vitor</Text>
        <Image style={styles.fotoperfil} source={fotoperfil} />
      </View>
      <Text style={styles.topo}>Pedidos de serviços</Text>

        {/*BOTAO CONTRATAR E TRABALHAR*/}

        <View style={styles.lista}>

            {/*MAICON */}
            <View style={styles.container2}>

                <View style={styles.sobre}>

                    {/*FOTO DE PERFIL */}

                    <View style={styles.perfil}>
                        <Image source={maicon} style={styles.avatar} />
                    </View>

                    {/*NOME E SERVIÇO */}
                    <View style={styles.perfildescricao}>
                        <Text style={styles.nome}>Maicon Rodrigues</Text>
                        <Text style={styles.servico}>Necessita de: Pintor</Text>
                    </View>

                </View>

                {/*DESCRIÇÃO*/}
                <Text style={styles.bio}>
                Necessito de pintor para pintar o interior de minha casa,
                pago as tintas e os pinceis, pago de 1500 á 2000.
                </Text>

                {/*BOTAO WHATSAPP */}
                <View style={styles.botoes}>
                    <BorderlessButton
                        style={styles.botaowpp}
                        onPress={() => Linking.openURL("https://wa.me/+5516988144127?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20como%20poderia%20te%20ajudar!?")}
                    >
                        <Image source={whatsapp} />
                        <Text style={styles.textoContato}>Entrar em contato</Text>
                    </BorderlessButton>
                </View>

            </View>


            {/*GABRIEL */}
            <View style={styles.container2}>

                <View style={styles.sobre}>

                    {/*FOTO DE PERFIL */}

                    <View style={styles.perfil}>
                        <Image source={gabriel} style={styles.avatar} />
                    </View>

                    {/*NOME E SERVIÇO */}
                    <View style={styles.perfildescricao}>
                        <Text style={styles.nome}>Gabriel</Text>
                        <Text style={styles.servico}>Necessita de: Eletricista</Text>
                    </View>

                </View>

                {/*DESCRIÇÃO*/}
                <Text style={styles.bio}>
                    Preciso de eletricista para fazer instalação eletrica em um
                    pequeno comercio.
                </Text>

                {/*BOTAO WHATSAPP */}
                <View style={styles.botoes}>
                    <BorderlessButton
                        style={styles.botaowpp}
                        onPress={() => Linking.openURL("https://wa.me/+5516991413419?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20como%20poderia%20te%20ajudar!?")}
                    >
                        <Image source={whatsapp} />
                        <Text style={styles.textoContato}>Entrar em contato</Text>
                    </BorderlessButton>
                </View>
        </View>

    </View>

    </ScrollView>

    </View>
    
  );
}

export default TrabalhadorVitor;
