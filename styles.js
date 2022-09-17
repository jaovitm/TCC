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
  body: {
    marginTop: 50,
    flex: 1,
  },
  activetitle: {
    color: "white",
    fontSize: 30,
    letterSpacing: 5,
    paddingTop: 30,
  },
  card: {
    flex: 1,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
  cardImage: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  cardTitle: {
    color: "gold",
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 5,
    padding: 10,
    marginBottom: 10,
  },
  cardDesc: {
    color: "white",
    fontSize: 20,
    textAlign:"justify",
  },
});

module.exports = styles;
