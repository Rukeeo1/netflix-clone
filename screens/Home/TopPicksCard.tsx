import React, { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import movieCards from "../../assets/MovieCardImages";
import CommonText from "../../shared/CommonText";
import homeStyles from "./homeStyle";

interface Props {}

export const TopPicksCard: FC<Props> = () => {
  const topMovieCards = movieCards.slice(0, 18);

  return (
    <View style={homeStyles.topPicksContainer}>
      <View style={homeStyles.topTextContainer}>
        <CommonText
          title="Top Picks for Gemini"
          titleStyle={homeStyles.topText}
        />
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={homeStyles.movieCardContainer}>
          {topMovieCards.map((movieCard) => (
            <TouchableOpacity key={movieCard.id}>
              <View style={homeStyles.movieCardItems}>
                <Image
                  source={{ uri: movieCard.image }}
                  style={homeStyles.movieCard}
                  resizeMode="stretch"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
