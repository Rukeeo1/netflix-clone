import Reaact from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeCard } from "../screens/Home/HomeCard";
import { Image, Text, View } from "react-native";
import Header from "../shared/Header";
// import Games from "../screens/Games/Games";
// import NewHot from "../screens/New&Hot/NewHot";
// import FastLaughs from "../screens/FastLaughs/FastLaughs";
// import Downloads from "../screens/Downloads/Downloads";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 50,
          paddingHorizontal: 8,
          border: 0,
          backgroundColor: "#000000",
        },

        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "#000000",
          height: 50,
        },
      })}
    >
      <Tab.Screen
        name="HomeCard"
        component={HomeCard}
        options={{
          // headerShown: false,
          headerTitle: () => <Header title={''} />,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/home.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{ color: focused ? "white" : "#888888", fontSize: 10 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* <Tab.Screen
        name="Games"
        component={Games}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/games.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{ color: focused ? "white" : "#888888", fontSize: 10 }}
              >
                Games
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="NewHot"
        component={NewHot}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/newhot.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{ color: focused ? "white" : "#888888", fontSize: 10 }}
              >
                New & Hot
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="FastLaughs"
        component={FastLaughs}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/smile.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{ color: focused ? "white" : "#888888", fontSize: 10 }}
              >
                Fast Laughs
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/download.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{ color: focused ? "white" : "#888888", fontSize: 10 }}
              >
                Downloads
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

