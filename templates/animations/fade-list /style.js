import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  title: {
    alignSelf: "center",
    fontFamily: "montserrat-medium",
    fontSize: 30,
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    zIndex: 2,
  },
  button: {
    borderWidth: 1.5,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    marginTop: 20,
    borderColor: "#427afa",
  },
  buttonText: {
    fontFamily: "montserrat-bold",
    color: "#427afa",
  },
});

export default styles;
