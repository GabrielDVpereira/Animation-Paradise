import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lottie: {
    width: "100%",
  },
  header: {
    position: "absolute",
    top: 100,
    width: "100%",
    alignItems: "center",
    elevation: 3,
  },
  title: {
    fontFamily: "montserrat-black",
    fontSize: 20,
    color: "#696969",
  },
  subtitle: {
    fontFamily: "montserrat-black",
    fontSize: 15,
    color: "#696969",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38b0de",
    padding: 15,
    elevation: 5,
    top: 200,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "montserrat-black",
    fontSize: 15,
    color: "#fff",
  },
});

export default styles;
