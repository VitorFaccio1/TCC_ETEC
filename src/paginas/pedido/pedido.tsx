import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Enviar from "../../assets/images/icones/enviar.png";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import styles from "./styles";


function Pedido() {

    const navegar = useNavigation();

    function irparaCriarpedido() {
        navegar.navigate("Contratar");
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.titulo}> Pedido</Text>
    
                <BorderlessButton style={styles.botao} onPress={irparaCriarpedido}>
                    <Image source={Enviar} />
                    <Text style={styles.textoBotao}>Criar um pedido</Text>
                </BorderlessButton>
            </View>
        </ScrollView>
  );
}

export default Pedido;
