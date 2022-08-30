import React from "react";
import { View, Image, StyleSheet, Text} from "react-native";
import { ScrollView } from "react-native";
import style from './styles';
import { Dimensions } from "react-native";
import Funk from "./assets/funk.jpg";
import Trap from "./assets/trap.jpg";
import Sertanejo from "./assets/sertanejo.jpg";
import Forro from "./assets/forro.jpg";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;


const category = [
  {
    nome: "Funk",
    image: Funk,
  },
  {
    nome: "Trap",
    image: Trap,
  },
  {
    nome: "Forró",
    image: Forro,
  },
  {
    nome: "Sertanejo",
    image: Sertanejo,
  },
];

const DisplayAnImage = () => {
  return (
    <ScrollView contentContainerStyle={style.container}>
      <View style={style.header}>
        <Image
          style={style.logo}
          source={require("./assets/logo.jpg")}
          blurRadius={13}
        />
        <Text style={style.logoText}>
          Bem Vindos ao {"\n"} <Text style={style.highlighted}>Maior</Text> app
          de Eventos do Brasil
        </Text>

        <Text style={style.title}>Categorias</Text>

        <View style={style.category}>
          <ScrollView horizontal={true}>
            {category.map((item) => {
              return (
                <View>
                  <Image source={item.image} style={style.categoryImage} />
                  <Text style={style.categoryName}>{item.nome}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>

      <View style={style.body}>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do a</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do Conteudo</Text>
        <Text style={style.title}>Restante do a</Text>
      </View>
    </ScrollView>
  );
};

export default DisplayAnImage;

/*
 
*/
