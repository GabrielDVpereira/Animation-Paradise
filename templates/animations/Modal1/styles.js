import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootContainer: { backgroundColor: "#000", flex: 1 },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#38b0de",
    padding: 15,
    elevation: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: "montserrat-black",
    color: "#fff",
  },
});

export default styles;
