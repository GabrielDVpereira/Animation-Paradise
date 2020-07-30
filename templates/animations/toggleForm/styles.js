import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 5,
  },
  inputView: {
    marginTop: 10,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  animatedFormView: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  toggleButton: {
    alignSelf: "center",
    marginTop: 100,
    backgroundColor: "#38b0de",
    padding: 10,
    borderRadius: 10,
  },
  toggleButtonText: {
    color: "#fff",
    fontFamily: "montserrat-medium",
    fontSize: 18,
  },
  formsView: { flexDirection: "row", width: "100%" },
  formTitle: {
    fontFamily: "montserrat-bold",
    marginBottom: 20,
  },
  inputLabel: {
    fontFamily: "montserrat-medium",
  },
});

export default styles;
