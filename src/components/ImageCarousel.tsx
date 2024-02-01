import React, { useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";
import PreviewImages from "./PreviewImages";

export type ImageCarouselProps = {
  images: ImageSourcePropType[];
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const mainSlideRef = useRef<FlatList<ImageSourcePropType> | null>(null);
  const indexRef = useRef<number>(selectedIndex);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const currentIndex = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(currentIndex);

      const distance = Math.abs(roundIndex - currentIndex);
      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setSelectedIndex(roundIndex);
      }
    },
    []
  );

  const scrollToIndex = (index: number) => {
    if (mainSlideRef.current) {
      mainSlideRef.current.scrollToIndex({ index, animated: true });
    }
  };

  const renderItem = ({ item }: { item: ImageSourcePropType }) => (
    <Image source={item} style={{ resizeMode: "cover", width: windowWidth }} />
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Main Slide */}
      <FlatList
        ref={(ref) => (mainSlideRef.current = ref)}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const currentIndex = Math.floor(
            event.nativeEvent.contentOffset.x / windowWidth
          );
          setSelectedIndex(currentIndex);
        }}
        initialScrollIndex={selectedIndex}
        initialNumToRender={0}
        maxToRenderPerBatch={1}
        removeClippedSubviews={true}
        scrollEventThrottle={32}
        updateCellsBatchingPeriod={100}
        windowSize={15}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
      />

      {/* Horizontal Scroll of Images */}
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <PreviewImages
            image={item}
            isSelected={index === selectedIndex}
            onPress={() => {
              setSelectedIndex(index);
              scrollToIndex(index);
            }}
          />
        )}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        initialScrollIndex={selectedIndex}
      />
    </View>
  );
};

export default ImageCarousel;
