import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../paginas/menu/menu";
import Registrar from "../paginas/registrar/registrar";
import Contratar from "../paginas/Contratar/contratar";
import ListaTrabalhadores from "../paginas/ListaTrabalhadores/ListaTrabalhadores";
import Login from "../paginas/Login/login";
import Esqueceu from "../paginas/Esqueceu/Esqueceu";
import Facebook from "../paginas/Facebook/Facebook";
import Google from "../paginas/Google/Google";
import perfilVitor from '../paginas/PerfilVitor/perfilVitor'
import perfilMaicon from '../paginas/PerfilMaicon/perfilMaicon'
import perfilGabriel from '../paginas/PerfilGabriel/perfilGabriel'
import perfilLuis from '../paginas/PerfilLuis/perfilLuis'
import perfilMateus from '../paginas/PerfilMateus/perfilMateus'
import perfilMarco from '../paginas/PerfilMarco/perfilMarco'
import perfilCesar from '../paginas/PerfilCesar/perfilCesar'
import perfilArtur from '../paginas/PerfilArtur/perfilArtur'
import apresentacao from '../paginas/Apresentacao/apresentacao'
import abertura from '../paginas/Abertura/abertura';
import Logintb from '../paginas/Loginworker/logintb';
import GoogleTB from '../paginas/Googletb/Google';
import FacebookTB from '../paginas/FacebookTB/FacebookTb';
import TrabalhadorVitor from '../paginas/TelaTrabalhador/victor';




const { Navigator, Screen } = createStackNavigator();

function Rotas() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="apresentacao" component={apresentacao}/>      
        <Screen name="Login" component={Login} />
        <Screen name="Menu" component={Menu} />
        <Screen name="Contratar" component={Contratar} />
        <Screen name="ListaTrabalhadores" component={ListaTrabalhadores} />
        <Screen name="Registrar" component={Registrar} />
        <Screen name="Esqueceu" component={Esqueceu} />
        <Screen name="Facebook" component={Facebook} />
        <Screen name="Google" component={Google}/>
        <Screen name="perfilVitor" component={perfilVitor}/>
        <Screen name="perfilMaicon" component={perfilMaicon}/>
        <Screen name="perfilGabriel" component={perfilGabriel}/>
        <Screen name="perfilLuis" component={perfilLuis}/>
        <Screen name="perfilMateus" component={perfilMateus}/>
        <Screen name="perfilMarco" component={perfilMarco}/>
        <Screen name="perfilCesar" component={perfilCesar}/>
        <Screen name="perfilArtur" component={perfilArtur}/>
        <Screen name="abertura" component={abertura}/>
        <Screen name="logintb" component={Logintb}/>
        <Screen name="tbvit" component={TrabalhadorVitor}/>
        <Screen name="fbtb" component={FacebookTB}/>
        <Screen name="GoogleTB" component={GoogleTB}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default Rotas;
