import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './global';
import NetflixSvg from '../../assets/svgs/netflix-upload-emptystate.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBell,
  faCaretDown,
  faCircleInfo,
  faPlay,
  faRotateRight,
} from '@fortawesome/free-solid-svg-icons';
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

export const HomeCard_1 = () => {
  return (
    <View style={globalStyles.lolomoRow_title_card_1}>
      <View style={globalStyles.rowHeader_ltr}>
        <View style={globalStyles.rowTitle_ltr0}>
        <CommonText title='Continue Watching' />
  
        </View>
      </View>

      <View style={globalStyles.rowContainer_title_card_1}>
        <View style={globalStyles.ptrack_container_1}>
          <View style={globalStyles.rowContent_slider_1}>
            <View style={globalStyles.slider_1}>
              <View style={globalStyles.sliderMask_showPeek}>
                <View style={globalStyles.sliderContent}>
                  <ScrollView
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[11]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[12]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[13]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[14]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[15]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[16]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[17]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[18]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[19]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[20]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[21]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[22]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[23]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[24]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[25]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[26]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[27]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[29]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[30]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
                                resizeMode: 'contain',
                              }}
                            />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={globalStyles.sliderItem1}>
                        <View style={globalStyles.titleCard_Container1}>
                          <View style={globalStyles.boxArt_size1}>
                            <Image
                              source={{
                                uri: slides[31]['image'],
                              }}
                              style={{
                                width: 171.75,
                                height: 96.59,
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
