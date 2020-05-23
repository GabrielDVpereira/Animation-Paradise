import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
export default function ShimmerEffect() {
  const [isImagesLoaded, setImages] = useState(false);
  const [isUserInfoLoaded, setUserInfo] = useState(false);
  const [isUserStatsLoaded, setUserStats] = useState(false);

  useEffect(() => {
    fetchImages();
    fetchUserInfo();
    fetchUserStats();
  }, []);

  function fetchImages() {
    setTimeout(() => {
      setImages(true);
    }, 3000);
  }

  function fetchUserInfo() {
    setTimeout(() => {
      setUserInfo(true);
    }, 2000);
  }

  function fetchUserStats() {
    setTimeout(() => {
      setUserStats(true);
    }, 1500);
  }

  return (
    <ScrollView>
      <ShimmerPlaceHolder
        autoRun
        visible={isImagesLoaded}
        style={styles.profileImage}
      >
        <Image
          source={require("../../../assets/images/me.jpg")}
          style={styles.profileImage}
        />
      </ShimmerPlaceHolder>

      <View style={styles.userInfoContainer}>
        <ShimmerPlaceHolder
          autoRun
          visible={isUserInfoLoaded}
          width={170}
          height={26}
        >
          <Text style={styles.username}>Gabriel Davi</Text>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isUserInfoLoaded}
          width={250}
          height={20}
          style={styles.userInterests}
        >
          <Text style={styles.userInterests}>Developer | Gym enthusiast</Text>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isUserInfoLoaded}
          width={200}
          height={20}
          style={styles.userLocation}
        >
          <View style={styles.userLocation}>
            <Feather name="map-pin" size={18} color="#A1ACB1" />
            <Text style={styles.userLocationText}>Brasília, Brasil</Text>
          </View>
        </ShimmerPlaceHolder>
      </View>

      <View style={styles.userStatistics}>
        <ShimmerPlaceHolder
          autoRun
          visible={isUserStatsLoaded}
          width={50}
          height={30}
        >
          <View>
            <Text style={styles.userStatisticsTitle}>198</Text>
            <Text style={styles.userStatisticsValue}>PRODUCTS</Text>
          </View>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isUserStatsLoaded}
          width={50}
          height={30}
        >
          <View>
            <Text style={styles.userStatisticsTitle}>1M</Text>
            <Text style={styles.userStatisticsValue}>FOLLOWERS</Text>
          </View>
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isUserStatsLoaded}
          width={50}
          height={30}
        >
          <View>
            <Text style={styles.userStatisticsTitle}>767</Text>
            <Text style={styles.userStatisticsValue}>FOLLOWING</Text>
          </View>
        </ShimmerPlaceHolder>
      </View>

      <View style={styles.userGallery}>
        <ShimmerPlaceHolder
          autoRun
          visible={isImagesLoaded}
          style={styles.galleryImage}
        >
          <Image
            source={require("../../../assets/images/paradise.jpg")}
            style={styles.galleryImage}
          />
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isImagesLoaded}
          style={styles.galleryImage}
        >
          <Image
            source={require("../../../assets/images/paradise2.jpeg")}
            style={styles.galleryImage}
          />
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isImagesLoaded}
          style={styles.galleryImage}
        >
          <Image
            source={require("../../../assets/images/paradise3.jpg")}
            style={styles.galleryImage}
          />
        </ShimmerPlaceHolder>

        <ShimmerPlaceHolder
          autoRun
          visible={isImagesLoaded}
          style={styles.galleryImage}
        >
          <Image
            source={require("../../../assets/images/paradise5.jpeg")}
            style={styles.galleryImage}
          />
        </ShimmerPlaceHolder>
      </View>
    </ScrollView>
  );
}
