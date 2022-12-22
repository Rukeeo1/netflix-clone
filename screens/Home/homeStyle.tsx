import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  scrollview: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  HomeCardContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },

  HomeCardNavBarContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    backgroundColor: "#000000",
  },

  HomeCardNavBarContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    color: "#e5e5e5",
    width: 339.11,
    paddingHorizontal: 22,
  },

  HomeCardNavText: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 26,
    color: "#e5e5e5",
  },

  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#e5e5e5",
  },

  CategoryText: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 26,
    color: "#e5e5e5",
  },

  caretDownIcon: {
    marginLeft: 22,
    width: 14.55,
    resizeMode: "contain",
  },

  HomeCardContent: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: 603.99,
  },

  mainPoster: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    // height: 762.6290893554688,
    height: 603.99,
  },

  mainPosterActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 330,
    height: 54.38,
    position: "absolute",
    top: 529.4,
  },

  myListContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 51,
  },

  plus: {
    width: 29.11,
    height: 29.11,
  },

  myListText: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
    color: "#e5e5e5",
  },

  mainPlayButton: {
    width: 119.34,
    height: 46.57,
  },

  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 29.11,
    height: 54.38,
  },

  infoIcon: {
    width: 29.11,
    height: 29.11,
  },

  infoText: {
    fontSize: 11.55,
    lineHeight: 17.61,
    textAlign: "center",
    color: "#e5e5e5",
  },

  /** TrendingNowContainer **/
  trendingNowContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default homeStyles;
