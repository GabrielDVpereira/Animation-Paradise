import React, { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import images from "./images.js";
import styles from "./styles";
import LazyImage from "./lazyImage";

export default function ImageBlur() {
  const [viaweble, setViawble] = useState([]);
  const handleViawbleChange = useCallback(({ changed }) => {
    setViawble(changed.map(({ item }) => item.id));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        onViewableItemsChanged={handleViawbleChange}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 40 }}
        data={images}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item: image }) => (
          <LazyImage
            url={image.url}
            url_small={image.url_small}
            aspectRatio={image.aspectRatio}
            shouldLoad={viaweble.includes(image.id)}
          />
        )}
      />
    </View>
  );
}
