import { SafeAreaView } from "react-native";
import ImageCarousel from "./src/components/ImageCarousel";

// firstly, load in local dummy info
// will replace later with backend data
// and fetch with react query
// as app.tsx will be the "data logic" layer
const images = [
  require("./assets/images/01.png"),
  require("./assets/images/02.png"),
  require("./assets/images/03.png"),
  require("./assets/images/04.png"),
  require("./assets/images/05.png"),
  require("./assets/images/06.png"),
  require("./assets/images/07.png"),
  require("./assets/images/08.png"),
  require("./assets/images/09.png"),
  require("./assets/images/10.png"),
  require("./assets/images/11.png"),
  require("./assets/images/12.png"),
];

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageCarousel images={images} />
    </SafeAreaView>
  );
}
