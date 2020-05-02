import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  yesView: {
    position: "absolute",
    top: 50,
    left: 40,
    zIndex: 10,
    transform: [{ rotate: "-30deg" }],
  },
  yesText: {
    color: "#427afa",
    fontSize: 32,
    fontFamily: "montserrat-bold",
    padding: 10,
  },
  noView: {
    position: "absolute",
    top: 50,
    right: 40,
    zIndex: 10,
    transform: [{ rotate: "30deg" }],
  },
  noText: {
    color: "#427afa",
    fontSize: 32,
    fontFamily: "montserrat-bold",
    padding: 10,
  },
  deckImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default styles;
