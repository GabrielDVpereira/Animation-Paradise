import { StyleSheet, Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  "window"
);

export const LOGO_WIDTH = 220;
export const LOGO_HEIGHT = 40;
export const DOT_SIZE = 40;
export const TICKER_HEIGHT = 40;
export const CIRCLE_SIZE = SCREEN_WIDTH * 0.6;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: SCREEN_WIDTH * 0.75,
    height: SCREEN_HEIGHT * 0.75,
    resizeMode: "contain",
    flex: 1,
  },
  textContainer: {
    alignSelf: "flex-end",
    alignItems: "flex-start",
    flex: 0.5,
  },
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: "#ccc",
    fontWeight: "600",
    textAlign: "left",
    width: SCREEN_WIDTH * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    position: "absolute",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotate: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  pagination: {
    position: "absolute",
    right: 20,
    bottom: 40,
    flexDirection: "row",
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  tickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    overflow: "hidden",
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: "absolute",
    top: "15%",
  },
  tickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    height: TICKER_HEIGHT,
    overflow: "hidden",
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
