// import React from 'react';
// import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import globalStyles from './style';
// import slides from '../../Components/NetflixImages';
// import CommonText from '../../shared/CommonText';

// export const HomeCard_6 = () => {
//   return (
//     <View style={globalStyles.lolomoRow_title_card_1}>
//       <View style={globalStyles.rowHeader_ltr}>
//         <View style={globalStyles.rowTitle_ltr0}>
//           <CommonText title='Popular on Netflix' titleStyle={{}} />
//         </View>
//       </View>

//       <View style={globalStyles.rowContainer_title_card_1}>
//         <View style={globalStyles.ptrack_container_1}>
//           <View style={globalStyles.rowContent_slider_1}>
//             <View style={globalStyles.slider_1}>
//               <View style={globalStyles.sliderMask_showPeek}>
//                 <View style={globalStyles.sliderContent}>
//                   <ScrollView
//                     pagingEnabled
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                   >
//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[11]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[12]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[13]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[14]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[15]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[16]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[17]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[18]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[19]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[20]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[21]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[22]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[23]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[24]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[25]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[26]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[27]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[29]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[30]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
//                                 resizeMode: 'contain',
//                               }}
//                             />
//                           </View>
//                         </View>
//                       </View>
//                     </TouchableOpacity>

//                     <TouchableOpacity>
//                       <View style={globalStyles.sliderItem1}>
//                         <View style={globalStyles.titleCard_Container1}>
//                           <View style={globalStyles.boxArt_size1}>
//                             <Image
//                               source={{
//                                 uri: slides[31]['image'],
//                               }}
//                               style={{
//                                 width: 171.75,
//                                 height: 96.59,
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
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
