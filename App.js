import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native";
import style from "./styles";
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

      <Text style={style.activetitle}>Eventos Ativos</Text>

      <View style={style.body}>
        <View style={style.card}>
          <Image
            source={require("./assets/logo.jpg")}
            style={style.cardImage}
          />
          <Text style={style.cardTitle}>Baile da Serra</Text>
          <Text style={style.cardDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Text>
        </View>
      </View>

      <View style={style.body}>
        <View style={style.card}>
          <Image
            source={require("./assets/logo.jpg")}
            style={style.cardImage}
          />
          <Text style={style.cardTitle}>Boteco do Gustavo Lima</Text>
          <Text style={style.cardDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </Text>
        </View>
      </View>

    </ScrollView>
  );
};

export default DisplayAnImage;

/*
 
*/
