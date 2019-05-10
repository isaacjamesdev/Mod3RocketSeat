import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import CardStack, { Card } from "react-native-card-stack-swiper";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CardStack
          style={styles.content}
          renderNoMoreCards={() => (
            <Text style={styles.text}>No more cards :(</Text>
          )}
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={() => console.tron.log("onSwiped")}
          onSwipedLeft={() => console.tron.log("onSwipedLeft")}
        >
          <Card style={styles.card}>
            <Image
              onSwipedLeft={() => alert("onSwipedLeft")}
              style={styles.image}
              source={{
                uri:
                  "https://www.elhombre.com.br/wp-content/uploads/2013/06/ros-1024.jpg"
              }}
            />
          </Card>
        </CardStack>

        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.red]}
              onPress={() => {
                this.swiper.swipeLeft();
              }}
            >
              <Image
                source={{
                  uri:
                    "https://st2.depositphotos.com/2899123/5947/v/950/depositphotos_59476449-stock-illustration-x-red-handwritten-letter.jpg"
                }}
                resizeMode={"contain"}
                style={{ height: 62, width: 62 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.orange]}
              onPress={() => {
                this.swiper.goBackFromLeft();
              }}
            >
              <Image
                source={{
                  uri:
                    "https://st2.depositphotos.com/2899123/5947/v/950/depositphotos_59476449-stock-illustration-x-red-handwritten-letter.jpg"
                }}
                resizeMode={"contain"}
                style={{ height: 32, width: 32, borderRadius: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.green]}
              onPress={() => {
                this.swiper.swipeRight();
              }}
            >
              <Image
                source={{
                  uri:
                    "https://st2.depositphotos.com/2899123/5947/v/950/depositphotos_59476449-stock-illustration-x-red-handwritten-letter.jpg"
                }}
                resizeMode={"contain"}
                style={{ height: 62, width: 62 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
