import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './style';
import slides from '../../Components/NetflixImages';
import CommonText from '../../shared/CommonText';
import Svgs from '../../assets/svgs';

interface Props {}

export const HomeCard_2 = (props: Props) => {
  return (
    <View style={globalStyles.lolomoRow_title_card_2}>
      <View style={globalStyles.rowHeader_ltr}>
        <View style={globalStyles.rowTitle_ltr0}>
          <CommonText
            title='Top 10 TV Movies in Nigeria Today'
            titleStyle={{}}
          />
        </View>
      </View>

      <View style={globalStyles.rowContainer_title_card}>
        <View style={globalStyles.ptrack_container}>
          <View style={globalStyles.rowContent_slider}>
            <View style={globalStyles.slider}>
              <View style={globalStyles.sliderMask_showPeek}>
                <View style={globalStyles.sliderContent}>
                  <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank1 />
                            </View>

                            <Image
                              source={{
                                uri: slides[0]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank2 />
                            </View>

                            <Image
                              source={{
                                uri: slides[1]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank3 />
                            </View>

                            <Image
                              source={{
                                uri: slides[3]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank4 />
                            </View>

                            <Image
                              source={{
                                uri: slides[4]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank5 />
                            </View>

                            <Image
                              source={{
                                uri: slides[5]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank6 />
                            </View>

                            <Image
                              source={{
                                uri: slides[6]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank7 />
                            </View>

                            <Image
                              source={{
                                uri: slides[7]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank8 />
                            </View>

                            <Image
                              source={{
                                uri: slides[8]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank9 />
                            </View>

                            <Image
                              source={{
                                uri: slides[9]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem}>
                        <View style={globalStyles.titleCard_Container}>
                          <View style={globalStyles.boxArt_size}>
                            <View style={globalStyles.rank_1_container}>
                              <Svgs.Rank10 />
                            </View>

                            <Image
                              source={{
                                uri: slides[10]['image'],
                              }}
                              style={{
                                width: 85.88,
                                height: 122.66,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
