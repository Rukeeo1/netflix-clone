import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './global';
import Rank_1 from '../../assets/svgs/rank_1-upload-emptystate.svg';
import Rank_2 from '../../assets/svgs/rank_2-upload-emptystate.svg';
import Rank_3 from '../../assets/svgs/rank_3-upload-emptystate.svg';
import Rank_4 from '../../assets/svgs/rank_4-upload-emptystate.svg';
import Rank_5 from '../../assets/svgs/rank_5-upload-emptystate.svg';
import Rank_6 from '../../assets/svgs/rank_6-upload-emptystate.svg';
import Rank_7 from '../../assets/svgs/rank_7-upload-emptystate.svg';
import Rank_8 from '../../assets/svgs/rank_8-upload-emptystate.svg';
import Rank_9 from '../../assets/svgs/rank_9-upload-emptystate.svg';
import Rank_10 from '../../assets/svgs/rank_10-upload-emptystate.svg';
import slides from '../../Components/NetflixImages';
import CommonText from '../../shared/CommonText';

interface Props {}

export const HomeCard = (props: Props) => {
  return (
    <View style={globalStyles.lolomoRow_title_card}>
      <View style={globalStyles.rowHeader_ltr}>
        <View style={globalStyles.rowTitle_ltr0}>
          <CommonText title='Top 10 TV Shows in Nigeria Today' />
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
                              <Rank_1 />
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
                              <Rank_2 />
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
                              <Rank_3 />
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
                              <Rank_4 />
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
                              <Rank_5 />
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
                              <Rank_6 />
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
                              <Rank_7 />
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
                              <Rank_8 />
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
                              <Rank_9 />
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
                              <Rank_10 />
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
