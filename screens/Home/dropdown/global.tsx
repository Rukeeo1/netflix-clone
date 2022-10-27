import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  account_dropdown_menu: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    position: 'absolute',
    top: 69,
    right: '26.09%',
    marginLeft: 0,
    opacity: 1,
    borderWidth: 1,
    borderColor: 'hsla(0,0%,100%,.15)',
    backgroundColor: 'rgba(0,0,0,.9)',
    zIndex: 1,
  },

  caret_icon: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -14,
    right: 10,
  },

  ptrack_content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 218,
  },

  ptrack_sub_menu_list: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    width: 218,
    borderWidth: 1,
    borderBottomColor: 'hsla(0,0%,100%,.15)',
  },

  sub_menu_item: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 218,
  },

  profile_link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 142,
  },

  avatar_wrapper: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  profile_name: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 100,
  },

  ptrack_sub_menu_list2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 218,
  },

  sub_menu_item2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 218,
  },

  account_links: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    width: 218,
  },

  sub_menu_link_icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 198,
  },

  hawkins_icon: {
    paddingRight: 13,
    paddingLeft: 5,
  },

  signout_links: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 218,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'hsla(0,0%,100%,.25)',
  },

  sub_menu_item_out: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 218,
  },
});
