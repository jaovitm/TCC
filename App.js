import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Text, Card, Button, Icon } from "@rneui/themed";
import Funk from './assets/funk.jpg'
import Trap from "./assets/trap.jpg";
import Sertanejo from "./assets/sertanejo.jpg";
import Forro from "./assets/forro.jpg";


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 10,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  logo: {
    width: "100%",
    height: "30%",
    borderRadius: 10,
  },
  logoText: {
    position: "relative",
    top: -210,
    left: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  highlighted: {
    color: "gold",
  },
  title: {
    color: "white",
    fontSize: 30,
    letterSpacing: 5,
  },
  categoryImage: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },
  categoryName: {
    color: "white",
    fontSize: 30,
    letterSpacing: 5,
    textAlign: "center",
  },
});

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
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={styles.logo}
          source={require("./assets/logo.jpg")}
          blurRadius={13}
        />
        <Text style={styles.logoText}>
          Bem Vindos ao {"\n"} <Text style={styles.highlighted}>Maior</Text> app
          de Eventos do Brasil
        </Text>

        <Text style={styles.title}>Categorias</Text>

        <ScrollView horizontal={true}>
          {category.map((item) => {
            return (
              <View style={styles.card}>
                <Image source={item.image} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.nome}</Text>
              </View>
            );
          })}
        </ScrollView>

      
      </ScrollView>
    </SafeAreaView>
  );
};

export default DisplayAnImage;
