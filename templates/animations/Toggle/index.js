import React, { useEffect, useState, useRef } from "react";
import { Animated } from "react-native";
import { ToggleContainer, ToggleText, ToggleIcon } from "./styles";
import toggleStyleConfig from "./toggleConfig";

const AnimatedIcon = Animated.createAnimatedComponent(ToggleIcon);

const iconPositon = new Animated.Value(0);
export default function Toggle() {
  const [toggleActive, setToggleActive] = useState(false);
  const toggle = () => setToggleActive(!toggleActive);

  useEffect(() => {
    if (toggleActive) {
      markAsRead();
    } else {
      markAsUnread();
    }
  }, [toggleActive]);

  const markAsRead = () => {
    Animated.timing(iconPositon, {
      toValue: 170,
      duration: 250,
    }).start();
  };
  const markAsUnread = () => {
    Animated.timing(iconPositon, {
      toValue: 0,
      duration: 250,
    }).start();
  };
  const { Icon, backgroundColor, fontColor } = toggleActive
    ? toggleStyleConfig.active
    : toggleStyleConfig.inactive;

  return (
    <ToggleContainer onPress={toggle} backgroundColor={backgroundColor}>
      <AnimatedIcon style={{ left: iconPositon }}>{Icon}</AnimatedIcon>
      <ToggleText color={fontColor}>Mark as read</ToggleText>
    </ToggleContainer>
  );
}
