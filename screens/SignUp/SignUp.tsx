import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import globalStyles from './global';
import NetflixSvg from '../../assets/svgs/netflix-upload-emptystate.svg';
import { TextInput } from '@react-native-material/core';
import NetflixBtn from '../../shared/NetflixBtn';
import Checkbox from 'expo-checkbox';

interface Props {}

export const SignUp = (props: Props) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={globalStyles.scrollview}
    >
      <View style={globalStyles.SignUpMountPoint}>
        <View style={globalStyles.loginWrapper}>
          <View></View>
          <View style={globalStyles.login_header_container}>
            <View style={globalStyles.svg_nfLogo}>
              <NetflixSvg style={globalStyles.netflix_logo} />
            </View>
          </View>

          <View style={globalStyles.login_body}>
            <View style={globalStyles.login_content}>
              <View style={globalStyles.login_content_form}>
                <View style={globalStyles.hybrid_login_form}>
                  <View style={globalStyles.hybrid_page_header}>
                    <Text style={globalStyles.hybrid_page_title}>Sign in</Text>
                  </View>

                  <View style={globalStyles.login_form_action}>
                    <View style={globalStyles.login_field_container}>
                      <View style={globalStyles.login_inputPlacement}>
                        <View style={globalStyles.login_emailPhoneControls}>
                          <View style={globalStyles.login_field_input}>
                            <TextInput
                              variant='filled'
                              label='Email or phone number'
                              style={{
                                width: 337.5,
                                height: 50,
                                backgroundColor: '#333333',
                              }}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={globalStyles.inputError}>
                        <Text style={globalStyles.inputErrorText}>
                          Please enter a valid email or phone number
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.login_field_container}>
                      <View style={globalStyles.login_inputPlacement}>
                        <View style={globalStyles.login_emailPhoneControls}>
                          <View style={globalStyles.login_field_input}>
                            <TextInput
                              variant='filled'
                              label='Password'
                              style={{
                                width: 337.5,
                                height: 50,
                                backgroundColor: '#333333',
                              }}
                            />
                          </View>
                        </View>
                      </View>

                      <View style={globalStyles.inputError}>
                        <Text style={globalStyles.inputErrorText}>
                          Your password must contain between 4 and 60
                        </Text>
                        <Text style={globalStyles.inputErrorText}>
                          characters
                        </Text>
                      </View>
                    </View>

                    <View style={globalStyles.login_button_container}>
                      <NetflixBtn text='Sign In' />
                    </View>

                    <View style={globalStyles.login_form_help}>
                      <View style={globalStyles.login_ui_binary_input}>
                        <Checkbox style={globalStyles.login_remember_check} />

                        <View style={globalStyles.login_remember}>
                          <Text style={globalStyles.login_remember_text}>
                            Remember me
                          </Text>
                        </View>
                      </View>

                      <View style={globalStyles.login_help_link}>
                        <Text style={globalStyles.login_help_text}>
                          Need help?
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={globalStyles.hybrid_login_form_other}>
                  <View style={globalStyles.login_signup_now}>
                    <Text style={globalStyles.login_signup_content}>
                      New to Netflix?
                    </Text>

                    <Text style={globalStyles.login_signup_content2}>
                      Sign up now.
                    </Text>
                  </View>

                  <View style={globalStyles.recaptcha_terms_use}>
                    <View style={globalStyles.recaptcha_terms}>
                      <View style={globalStyles.recaptcha_terms_text}>
                        <Text style={globalStyles.recaptcha_terms_para}>
                          This page is protected by Google reCAPTCHA to ensure
                        </Text>

                        <View style={globalStyles.recaptcha_terms_paraContent}>
                          <Text style={globalStyles.recaptcha_terms_para}>
                            you're not a bot.
                          </Text>
                          <Text style={globalStyles.recaptcha_terms_link}>
                            Learn more.
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={globalStyles.recaptcha_terms_use_disclosure}
                    ></View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={globalStyles.site_footer_wrapper}>
            <View style={globalStyles.footer_divider}></View>
            <View style={globalStyles.site_footer}>
              <View style={globalStyles.footer_top}>
                <Text style={globalStyles.footer_top_para}>
                  Questions? Contact us.
                </Text>
              </View>

              <View style={globalStyles.footer_links_structure}>
                <View style={globalStyles.footer_links_container}>
                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>FAQ</Text>
                  </View>

                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>
                      Help Center
                    </Text>
                  </View>
                </View>

                <View style={globalStyles.footer_links_container}>
                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>
                      Terms of Use
                    </Text>
                  </View>

                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>Privacy</Text>
                  </View>
                </View>

                <View style={globalStyles.footer_links_container}>
                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>
                      Cookie Preferences
                    </Text>
                  </View>

                  <View style={globalStyles.footer_link_item}>
                    <Text style={globalStyles.footer_link_textT}>
                      Corporate Information
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
