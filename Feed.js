import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";


export default class Feed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false
      };
    }

    render() {
        if (this.state.fontsLoaded) {
          return (
            <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Storytelling App</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={stories}
                  renderItem={this.renderItem}
                />
              </View>
              <View style={{ flex: 0.08 }} />
            </View>
          );
        }
      }
    }



