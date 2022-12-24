import React, { FC } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import movieCards from "../../assets/MovieCardImages";
import CommonText from "../../shared/CommonText";
import homeStyles from "./homeStyle";

interface Props {}

export const ContinueCard: FC<Props> = () => {
  const continueMovieCards = movieCards.slice(18, 36);

  console.log(continueMovieCards);

  return (
    <View style={homeStyles.continueCardContainer}>
      <View style={homeStyles.topTextContainer}>
        <CommonText
          title="Continue Watching for Gemini"
          titleStyle={homeStyles.topText}
        />
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={homeStyles.movieCardContainer}>
          {continueMovieCards.map((movieCard) => (
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
