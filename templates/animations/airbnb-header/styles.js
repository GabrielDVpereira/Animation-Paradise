import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 90,
    width: "100%",
    backgroundColor: "#38b0de",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
  },
  image: {
    width: "90%",
    height: 400,
    marginBottom: 20,
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: "center",
    paddingBottom: 90,
    zIndex: 1,
    marginTop: 100,
  },
  backIcon: {
    position: "absolute",
    left: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
  },
});

export default styles;
