import ImageBlur from "../animations/image-blur";
import Modal1 from "../animations/Modal1";
import Deck from "../animations/deck-swiper";
import List from "../animations/Swipe-list";
import HideInput from "../animations/hide-input";
import SwipeImage from "../animations/swipe-image";
import ShimmerEffect from "../animations/shimmer-effect";

const components = [
  {
    name: "Image Blur",
    container: ImageBlur,
  },
  {
    name: "Modal 1",
    container: Modal1,
  },
  {
    name: "Deck swipe",
    container: Deck,
  },
  {
    name: "Swipe List",
    container: List,
  },
  {
    name: "Hidable input",
    container: HideInput,
  },
  {
    name: "Swipe image",
    container: SwipeImage,
  },
  {
    name: "Shimmer Effect",
    container: ShimmerEffect,
  },
];

export default components;
