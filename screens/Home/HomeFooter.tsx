import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import globalStyles from './global';
import Facebook from '../../assets/svgs/facebook-upload-emptystate.svg';
import Instagram from '../../assets/svgs/instagram-upload-emptystate.svg';
import Youtube from '../../assets/svgs/youtube-upload-emptystate.svg';

export const HomeFooter = () => {
  return (
    <View style={globalStyles.contentInfo_footer}>
      <View style={globalStyles.social_links}>
        <View style={globalStyles.social_links_icon}>
          <TouchableOpacity>
            <View style={globalStyles.social_icon_container}>
              <Facebook style={globalStyles.facebook} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.social_links_icon}>
          <TouchableOpacity>
            <View style={globalStyles.social_icon_container}>
              <Instagram style={globalStyles.facebook} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalStyles.social_links_icon}>
          <TouchableOpacity>
            <View style={globalStyles.social_icon_container}>
              <Youtube style={globalStyles.facebook} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={globalStyles.social_link_list}>
        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Audio Description
            </Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Help Center
            </Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>Gift Cards</Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Media Center
            </Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Investor Relations
            </Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>Jobs</Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Terms of Use
            </Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>Privacy</Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Legal Notices
            </Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Cookie Preferences
            </Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_link_wrapper}>
          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>
              Corporate Information
            </Text>
          </View>

          <View style={globalStyles.member_footer_links}>
            <Text style={globalStyles.member_footer_link_text}>Contact Us</Text>
          </View>
        </View>

        <View style={globalStyles.member_footer_service}>
          <TouchableOpacity>
            <View style={globalStyles.member_footer_button}>
              <Text style={globalStyles.member_footer_btn}>Service Code</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
