import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1219bf",
    position: "absolute",
    bottom: 70,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
  hiddenButtonView: {
    position: "absolute",
    bottom: 70,
    right: 23,
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  hiddenButton1: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#2edad1",
    marginLeft: 10,
  },
  hiddenButton2: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#ff4500",
    marginLeft: 10,
  },
});

export default styles;
