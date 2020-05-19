import ImageBlur from "../animations/image-blur";
import Modal1 from "../animations/Modal1";
import Deck from "../animations/deck-swiper";
import List from "../animations/Swipe-list";
import HideInput from "../animations/hide-input";
import SwipeImage from "../animations/swipe-image";

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
    name: "Swipe image v1",
    container: SwipeImage,
  },
];

export default components;
