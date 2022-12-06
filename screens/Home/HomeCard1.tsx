// import React, { useRef, useState } from 'react';
// import {
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import homeStyles from './style';
// import slides from '../../Components/NetflixImages';
// import CommonText from '../../shared/CommonText';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import {
//   faChevronLeft,
//   faChevronRight,
// } from '@fortawesome/free-solid-svg-icons';
// import Svgs from '../../assets/svgs';

// interface Props {}

// export const HomeCard = (props: Props) => {

//   const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   return (
//     <View style={homeStyles.lolomoRow_title_card}>
//       <View style={homeStyles.rowHeader_ltr}>
//         <View style={homeStyles.rowTitle_ltr0}>
//           <CommonText
//             title='Top 10 TV Shows in Nigeria Today'
//             titleStyle={{}}
//           />
//         </View>
//       </View>

//       <View style={homeStyles.rowContainer_title_card}>
//         <View style={homeStyles.ptrack_container}>
//           <View style={homeStyles.rowContent_slider}>
//             <View style={homeStyles.slider}>
//               <TouchableOpacity style={homeStyles.handlePrev}>
//                 <View>
//                   <FontAwesomeIcon
//                     icon={faChevronLeft}
//                     size={16}
//                     style={homeStyles.faUserInfo}
//                   />
//                 </View>
//               </TouchableOpacity>

//               <View style={[homeStyles.sliderMask_showPeek]}>
//                 <View style={homeStyles.sliderContent}>
//                   <ScrollView
//                     pagingEnabled
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                   >
//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank1 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[0]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank2 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[1]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank3 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[3]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank4 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[4]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank5 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[5]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank6 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[6]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank7 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[7]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank8 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[8]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank9 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[9]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={homeStyles.sliderItem}>
//                         <View style={homeStyles.titleCard_Container}>
//                           <View style={homeStyles.boxArt_size}>
//                             <View style={homeStyles.rank_1_container}>
//                               <Svgs.Rank10 />
//                             </View>

//                             <Image
//                               source={{
//                                 uri: slides[10]['image'],
//                               }}
//                               style={{
//                                 width: 85.88,
//                                 height: 122.66,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>
//                   </ScrollView>
//                 </View>
//               </View>

//               <TouchableOpacity style={homeStyles.handleNext}>
//                 <View>
//                   <FontAwesomeIcon
//                     icon={faChevronRight}
//                     size={16}
//                     style={homeStyles.faUserIcon}
//                   />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
