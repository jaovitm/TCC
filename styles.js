import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 10,
    backgroundColor: "#111",
  },
  logo: {
    width: "100%",
    height: "40%",
    borderRadius: 10,
  },
  logoText: {
    position: "relative",
    top: -170,
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
    width: 150,
    height: 150,
    margin: 20,
    borderRadius: 100,
  },
  categoryName: {
    color: "white",
    fontSize: 30,
    letterSpacing: 5,
    textAlign: "center",
  },
  header: {
    height: 500,
  },
  category: {
    height: 250,
    margin: 10,
  },
  body:{
    marginTop:100,
  },
});

module.exports = styles;
