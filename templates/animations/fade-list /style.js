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
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  textInput: {
    marginLeft: 15,
    elevation: 2,
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    flex: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    height: 50,
  },
  searchButton: {
    backgroundColor: "#0066ff",
    flex: 1,
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    height: 50,
    marginRight: 15,
  },
});

export default styles;
