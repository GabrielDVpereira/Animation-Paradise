import { StyleSheet, Dimensions } from "react-native";
const screen_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  bellIcon: {
    position: "absolute",
    zIndex: 1,
    marginTop: 120,
    width: screen_width * 0.9,
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    alignSelf: "center",
    zIndex: 2,
    marginTop: 120,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  followButton: {
    flexDirection: "row",
    padding: 5,
    width: 150,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  followButtonText: { color: "#fff", marginLeft: 3 },
  talkButton: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 5,
    width: 150,
    borderRadius: 20,
    borderColor: "#38b0de",
    alignItems: "center",
    justifyContent: "center",
  },
  talkButtonText: { color: "#38b0de", marginLeft: 5 },
});

export default styles;
