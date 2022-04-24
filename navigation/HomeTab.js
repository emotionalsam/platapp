import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//tab
const Tab = createBottomTabNavigator();

//ICONS,COLORS
import { COLORS, ICONS } from "../constants";

//screens
import { Home } from "../screens";

//redner
const CameraRender = () => {
  return (
    <View
      style={{ backgroundColor: COLORS.primary, padding: 20, borderRadius: 50 }}
    >
      <Image
        source={ICONS.camera}
        style={{ tintColor: COLORS.white, height: 25, width: 25 }}
      />
    </View>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Thunder":
              return (
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25, tintColor }}
                  source={ICONS.flash}
                />
              );
            case "Box":
              return (
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25, tintColor }}
                  source={ICONS.cube}
                />
              );
            case "Camera":
              return <CameraRender />;
            case "Search":
              return (
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25, tintColor }}
                  source={ICONS.search}
                />
              );
            case "Favourite":
              return (
                <Image
                  resizeMode="contain"
                  style={{ height: 25, width: 25, tintColor }}
                  source={ICONS.heart}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Thunder" component={Home} />
      <Tab.Screen name="Box" component={Home} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Favourite" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
