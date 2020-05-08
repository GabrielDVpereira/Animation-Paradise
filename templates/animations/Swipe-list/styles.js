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
    position: "absolute",
    width: "100%",
  },
  listContent: {
    backgroundColor: "#eeee",
  },
  listHeader: {
    height: 40,
    backgroundColor: "#237cbf",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    marginTop: 200,
    fontFamily: "montserrat-medium",
    fontSize: 16,
  },
});

export default styles;
