import React from "react";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import {AirbnbRating, Rating } from 'react-native-elements';
import styles from "./styles";

import whatsapp from "../../assets/images/icones/whatsapp.png";
import vitor from "../../assets/images/vitor.png";
import lupa from "../../assets/images/icones/lupa.png";
import maicon from '../../assets/images/maicon.png'
import gabriel from '../../assets/images/gabrielLista.png';
import luis from '../../assets/images/luisLista.png';
import mateus from '../../assets/images/mateus.png'
import marco from '../../assets/images/marcoLista.png'
import cesar from '../../assets/images/cesarLista.png';
import artur from '../../assets/images/arturLista.png';



function Trabalhadores() {

  const navegar = useNavigation();

  function navegarParaPerfilVitor() {
    navegar.navigate("perfilVitor");
  }

  function navegarParaPerfilMaicon() {
    navegar.navigate("perfilMaicon");
  }

  function navegarParaPerfilGabriel() {
    navegar.navigate("perfilGabriel");
  }
 
  function navegarParaPerfilLuis() {
    navegar.navigate("perfilLuis");
  }
 
  function navegarParaPerfilMateus() {
    navegar.navigate("perfilMateus");
  }

  function navegarParaPerfilMarco() {
    navegar.navigate("perfilMarco");
  }
 
  function navegarParaPerfilCesar() {
    navegar.navigate("perfilCesar");
  }
  
  function navegarParaPerfilArtur() {
    navegar.navigate("perfilArtur");
  }
 

  return (
  <View>
    {/*Vitor */}

    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={vitor} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Vitor Faccio</Text>
        <Text style={styles.servico}>Técnico de informática</Text>
      </View>

       {/*RANKING */}
       <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Apaixonado por conhecimento de todas as áreas e sempre buscando aprender
        novas coisas sobre tudo. Abra meu perfil para conhecer mais trabalhos que eu posso fazer
        para você!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/5516996280697?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilVitor}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>


          {/*MAICON */}



    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={maicon} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Maicon Rodrigues</Text>
        <Text style={styles.servico}>Técnico de informática</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
      Louco por informática e eletrônicos, sempre atrás de novas soluções para todos os tipos de problemas. 
      Fique a vontade pra me conhecer melhor, sempre tem uma resposta pra o que você precisa. Abra meu perfil
      para conhecer mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516988144127?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilMaicon}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>




    {/*GABRIEL */}

    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={gabriel} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Gabriel</Text>
        <Text style={styles.servico}>Técnico de informática</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Trabalhando com meu hobby que é a programação para solucionar problemas para o mundo. Veja mais no meu perfil!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516991413419?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilGabriel}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>





    {/*LUIS GUILHERME */}
    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={luis} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Luis Guilherme Ochoa</Text>
        <Text style={styles.servico}>Técnico de informática</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Atualmente estudando programação, tentando resolver os problemas e ajudar outras pessoas através dela! Abra meu
        perfil para conhecer mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516997883311?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilLuis}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>





    {/*MATEUS MAXIMO */}

        <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={mateus} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Mateus Máximo</Text>
        <Text style={styles.servico}>Técnico de informática</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={6}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Meu hobby é a programação, mas ainda possuo diversos outros serviços que ja atuei como profissional,
        abra meu perfil para conhecer mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516996123995?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilMateus}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>



    {/*MARCO ANTONIO */}

    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={marco} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Marco Antonio</Text>
        <Text style={styles.servico}>Consultor de seguros</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={5}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
      Oferecço serviço diferenciado para você que precisa de confiança, 
      agilidade e segurança na hora de contratar ou renovar o seu seguro. Abra meu 
      perfil para ver mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516997012909?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilMarco}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>



    {/*CESAR SIQUEIRA */}

    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={cesar} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Cesar Siqueira</Text>
        <Text style={styles.servico}>Pedreiro</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={5}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Construir casas é meu dom! Desde muito cedo ajudei em diversas obras de parentes meus e foi ai
        que percebi minha paixão por construção! Abra meu perfil e saiba mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516997349428?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilCesar}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>


    {/*ARTUR CHIODI */}

    <View style={styles.container2}>
      {/*FOTO DE PERFIL */}
      <View style={styles.perfil}>
        <Image source={artur} style={styles.avatar} />
      </View>

      {/*NOME E SERVIÇO */}
      <View style={styles.perfildescricao}>
        <Text style={styles.nome}>Artur Chiodi</Text>
        <Text style={styles.servico}>Eletricista</Text>
      </View>

      {/*RANKING */}
      <View style={styles.rating}>
        <AirbnbRating
          count={6}
          reviews={["Horrivel", "Ruim", "Neutro", "Bom", "Muito bom", "Sensacional"] }
          defaultRating={4}
          size={20}
          starStyle={styles.estrela}          
        />
        </View>

      {/*DESCRIÇÃO*/}
      <Text style={styles.bio}>
        Estou no ramo da elétrica já fazem 9 anos! Tenho muita experiência e dedicação,
        Melhor eletricista da região! Entre no meu perfil para saber mais!
      </Text>

      {/*BOTAO WHATSAPP */}
      <View style={styles.botoes}>
        <BorderlessButton
          style={styles.botaowpp}
          onPress={() => Linking.openURL("https://wa.me/+5516997012909?text=Olá,%20vi%20seu%20perfil%20no%20HOME%20EASE,%20você%20poderia%20me%20ajudar!?")}
        >
          <Image source={whatsapp} />
          <Text style={styles.textoContato}>Entrar em contato</Text>
        </BorderlessButton>
        <BorderlessButton
           onPress={navegarParaPerfilArtur}
          style={styles.botaoperfil}>
          <Image source={lupa} />
          <Text style={styles.textoperfil}>Ver perfil</Text>
        </BorderlessButton>
      </View>
    </View>





    </View>
  );
}

export default Trabalhadores;
