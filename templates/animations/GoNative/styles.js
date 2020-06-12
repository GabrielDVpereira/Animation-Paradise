import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImageContainer: {
    width: "100%",
    height: "30%",
    position: "absolute",
    zIndex: 2,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#38b0de",
    justifyContent: "flex-end",
  },
  headerTitle: {
    fontFamily: "montserrat-bold",
    margin: 20,
    color: "#fff",
  },
  headerNoImage: {
    width: "100%",
    height: "30%",
    marginTop: 0,
    backgroundColor: "#38b0de",
    justifyContent: "flex-end",
    position: "absolute",
    zIndex: 2,
  },
  cardContainer: {
    margin: 20,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfo: {
    width: "60%",
  },
  cardName: {
    fontFamily: "montserrat-bold",
    color: "#fff",
  },
  cardDescription: {
    fontFamily: "montserrat-medium",
    color: "#fff",
  },
  cardLikesContainer: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flexDirection: "row",
    alignItems: "center",
    height: 0,
    padding: 12,
    alignSelf: "center",
    borderRadius: 30,
  },
  cardLikes: { marginLeft: 5, color: "#fff" },
});

export default styles;
