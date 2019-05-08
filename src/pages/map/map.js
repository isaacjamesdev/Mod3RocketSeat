import React, { Component } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import styles from "./styles";

export default class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: -4.9664216,
            longitude: -39.0146397,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />
        <Marker
          cordinate={{
            latitude: -4.9664216,
            longitude: -39.0146397
          }}
        />
      </View>
    );
  }
}
