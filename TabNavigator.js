import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Create Post") {
            iconName = focused ? "crate" : "create-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
      
    >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Story" component={CreateStory} />
    </Tab.Navigator>
  );
};

const styles= StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "black"
    },
    droidSafeArea: {
    marginTop: Platform.OS ="android"? StatusBar.currentHeight: RFValue (35)
    },
    appTitle: {
    flex: 0.07,
    flexDirection: "row"
    },
    appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
    },
    iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
    },
    appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center"
    },
    appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    },
    cardContainer: {
    flex: 0.85
    }
    });


export default BottomTabNavigator;