import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    zIndex: -2,
  },
  inputContainer: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: 70,
    zIndex: -1,
    backgroundColor: "#38b0de",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    paddingHorizontal: 30,
  },
  textInput: {
    flex: 1,
    width: "100%",
    backgroundColor: "#37a8d4",
    borderRadius: 20,
    paddingHorizontal: 50,
    fontSize: 15,
    color: "#f5f5f5",
    height: 45,
  },
  searchButton: {
    position: "absolute",
    left: 50,
  },
});

export default styles;
