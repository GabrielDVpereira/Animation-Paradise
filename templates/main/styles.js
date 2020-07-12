import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#c4c4c4",
    alignItems: "center",
  },
  animationList: {
    marginVertical: 50,
  },
  animation: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    elevation: 10,
    margin: 10,
    width: 150,
    height: 100,
    justifyContent: "space-between",
  },
  animationTitle: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "montserrat-medium",
    color: "#696969",
  },
});

export default styles;
