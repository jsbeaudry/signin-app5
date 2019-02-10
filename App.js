import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App5 from "./app5/home";
import Signin1 from "./app5/signin";
import Signup1 from "./app5/signup";

import { Ionicons } from "@expo/vector-icons";

const A5 = createStackNavigator({
  home: {
    screen: App5,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signin1: {
    screen: Signin1,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  },
  Signup1: {
    screen: Signup1,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A5);
