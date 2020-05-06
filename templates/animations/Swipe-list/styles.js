import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    margin: 5,
    marginHorizontal: 20,
    borderRadius: 15,
    elevation: 2,
  },
  listContainer: {
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  listContent: {
    backgroundColor: "#eeee",
    height: "100%",
  },
  listHeader: {
    height: 40,
    backgroundColor: "#237cbf",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
