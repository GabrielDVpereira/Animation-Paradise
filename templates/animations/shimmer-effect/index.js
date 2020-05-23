import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
export default function ShimmerEffect() {
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/images/me.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>Gabriel Davi</Text>
        <Text style={styles.userInterests}>Developer | Gym enthusiast</Text>
        <View style={styles.userLocation}>
          <Feather name="map-pin" size={18} color="#A1ACB1" />
          <Text style={styles.userLocationText}>Brasília, Brasil</Text>
        </View>
      </View>

      <View style={styles.userStatistics}>
        <View>
          <Text style={styles.userStatisticsTitle}>198</Text>
          <Text style={styles.userStatisticsValue}>PRODUCTS</Text>
        </View>
        <View>
          <Text style={styles.userStatisticsTitle}>1M</Text>
          <Text style={styles.userStatisticsValue}>FOLLOWERS</Text>
        </View>
        <View>
          <Text style={styles.userStatisticsTitle}>767</Text>
          <Text style={styles.userStatisticsValue}>FOLLOWING</Text>
        </View>
      </View>

      <View style={styles.userGallery}>
        <Image
          source={require("../../../assets/images/paradise.jpg")}
          style={styles.galleryImage}
        />
        <Image
          source={require("../../../assets/images/paradise2.jpeg")}
          style={styles.galleryImage}
        />
        <Image
          source={require("../../../assets/images/paradise3.jpg")}
          style={styles.galleryImage}
        />
        <Image
          source={require("../../../assets/images/paradise5.jpeg")}
          style={styles.galleryImage}
        />
      </View>
    </ScrollView>
  );
}
