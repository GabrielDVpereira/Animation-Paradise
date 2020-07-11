import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default {
  active: {
    Icon: <AntDesign name="check" size={20} color="black" />,
    backgroundColor: "#3440eb",
    fontColor: "#fff",
  },
  inactive: {
    Icon: <Entypo name="eye" size={20} color="black" />,
    backgroundColor: "#e5e5e5",
    fontColor: "#000",
  },
};
