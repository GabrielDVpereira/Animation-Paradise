import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 400,
    alignSelf: "center",
    marginTop: 40,
  },
  userInfoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  username: {
    fontFamily: "montserrat-bold",
    fontSize: 26,
  },
  userInterests: {
    fontFamily: "montserrat-medium",
    fontSize: 18,
    marginTop: 3,
  },
  userLocation: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  userLocationText: {
    fontFamily: "montserrat-medium",
    fontSize: 14,
    color: "#A1ACB1",
    marginLeft: 5,
  },
  userStatistics: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    width: "100%",
  },
  userStatisticsTitle: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
  },
  userStatisticsValue: {
    fontFamily: "montserrat-medium",
    fontSize: 12,
    color: "#666",
  },
  userGallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    borderTopWidth: 1,
    marginTop: 20,
    borderTopColor: "#A1ACB1",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 30,
  },
  galleryImage: {
    width: 180,
    height: 210,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default styles;
