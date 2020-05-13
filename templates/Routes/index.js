import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import components from "./components";
import Home from "../index";
import Main from "../main";
import React from "react";

const AnimationListNav = createStackNavigator();
const HomeNavigation = createBottomTabNavigator();

const AnimationNav = () => (
  <AnimationListNav.Navigator
    initialRouteName="main"
    screenOptions={{
      headerTitleAlign: "center",
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#38b0de",
      },
    }}
  >
    <AnimationListNav.Screen
      name="main"
      component={Main}
      options={{ headerShown: false }}
    />
    {components.map((component) => (
      <AnimationListNav.Screen
        name={component.name}
        component={component.container}
      />
    ))}
  </AnimationListNav.Navigator>
);

const HomeNav = () => (
  <HomeNavigation.Navigator screenOptions={{ tabBarVisible: false }}>
    <HomeNavigation.Screen name="home" component={Home} />
    <HomeNavigation.Screen name="main" component={AnimationNav} />
  </HomeNavigation.Navigator>
);

const Routes = () => (
  <NavigationContainer>
    <HomeNav />
  </NavigationContainer>
);

export default Routes;
