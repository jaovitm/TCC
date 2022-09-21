import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import { ScrollView } from "react-native";
import style from "./styles";
import { Dimensions } from "react-native";
import Funk from "./assets/funk.jpg";
import Trap from "./assets/trap.jpg";
import Sertanejo from "./assets/sertanejo.jpg";
import Forro from "./assets/forro.jpg";
import axios from "axios";
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

let events = [
  
];

const databaseEvents = async () => {
  try {
     await axios
    .get("http://192.168.26.180/")
    .then((res) => {
      res.data.map((item) => events.push(item));
    })
  } catch (error) {
    console.log(error)
  }
 

  console.log(events);
};

databaseEvents();

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

      {events.map((item) => {
        return (
          <View style={style.body}>
            <Text style={style.activetitle}>{item.nome}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default DisplayAnImage;

/*
 
*/
