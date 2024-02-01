import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

type PreviewImagesProps = {
  image: ImageSourcePropType;
  isSelected: boolean;
  onPress: () => void;
};

const PreviewImages = ({ image, isSelected, onPress }: PreviewImagesProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Image
        source={image}
        style={[
          styles.image,
          isSelected ? styles.selectedImage : styles.unselectedImage,
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 80,
    resizeMode: "contain",
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: "blue",
  },
  unselectedImage: {
    borderWidth: 2,
    borderColor: "transparent",
  },
});

export default PreviewImages;
