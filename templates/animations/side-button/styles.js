import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#28d7eb",
    position: "absolute",
    bottom: 70,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    elevation: 2,
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
    justifyContent: "center",
    alignItems: "center",
  },
  hiddenButton2: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#ff4500",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
