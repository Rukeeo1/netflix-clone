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
    color: "#FFFFFF",
    width: "92%",
    maxWidth: 370,
    paddingHorizontal: 22,
  },

  HomeCardNavText: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 26,
    color: "#FFFFFF",
  },

  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#FFFFFF",
  },

  CategoryText: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 26,
    color: "#FFFFFF",
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
    height: 538,
  },

  mainPoster: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    maxWidth: 375,
    height: 538,
  },

  mainPosterActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 41,
    position: "absolute",
    top: 468,
  },

  mainPosterActionContents: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 291,
  },

  myListContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 51,
  },

  myListContent: {
    alignItems: "center",
    justifyContent: "center",
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
    color: "#FFFFFF",
  },

  mainPlayButton: {
    width: 100,
  },

  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 51,
  },

  infoContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  infoIcon: {
    width: 29.11,
    height: 29.11,
  },

  infoText: {
    fontSize: 11.55,
    lineHeight: 17.61,
    textAlign: "center",
    color: "#FFFFFF",
  },

  /** topPicksContainer **/
  topPicksContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 367,
    padding: 0,
    // marginTop: 57.6,
    marginBottom: 19.2,
  },

  topTextContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },

  topText: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -0.25,
    textAlign: "left",
    color: "#E6E6E6",
  },

  movieCardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  movieCardItems: {
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderRadius: 14,
    height: "auto",
  },

  movieCard: {
    width: 106,
    // height: 188,
    height: 160,
    borderRadius: 4,
  },

  /*ContinueCard*/
  continueCardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: 367,
    padding: 0,
    // marginTop: 57.6,
    marginBottom: 19.2,
  },
});

export default homeStyles;
