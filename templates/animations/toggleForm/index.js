import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import Animated, { Easing, timing, sub } from "react-native-reanimated";
import styles from "./styles";

const { width: screen_width } = Dimensions.get("window");
const translateFormX = new Animated.Value(0);

const showSecondaryFormConfig = {
  duration: 200,
  toValue: screen_width,
  easing: Easing.inOut(Easing.ease),
};

const showPrimaryFormConfig = {
  duration: 200,
  toValue: 0,
  easing: Easing.inOut(Easing.ease),
};

const Form = () => {
  const [isPrimaryFormVisible, setPrimaryFormVisible] = useState(false);

  const toggleForm = () => setPrimaryFormVisible(!isPrimaryFormVisible);

  const showSecondaryForm = () =>
    timing(translateFormX, showSecondaryFormConfig).start();

  const showPrimaryForm = () =>
    timing(translateFormX, showPrimaryFormConfig).start();

  useEffect(() => {
    if (isPrimaryFormVisible) {
      showSecondaryForm();
    } else {
      showPrimaryForm();
    }
  }, [isPrimaryFormVisible]);

  const renderPrimaryForm = () => (
    <Animated.View
      style={[
        styles.animatedFormView,
        {
          transform: [
            {
              translateX: translateFormX.interpolate({
                inputRange: [0, screen_width],
                outputRange: [0, -screen_width],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.formTitle}>Primary form</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput placeholder="Name" style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Date of birth</Text>
        <TextInput placeholder="Date" style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Document</Text>
        <TextInput placeholder="Cpf" style={styles.input} />
      </View>
    </Animated.View>
  );
  const renderSecondaryForm = () => (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateX: translateFormX.interpolate({
                inputRange: [0, screen_width],
                outputRange: [screen_width, 0],
              }),
            },
          ],
        },
        styles.animatedFormView,
      ]}
    >
      <Text style={styles.formTitle}>Secondary form</Text>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Company name</Text>
        <TextInput placeholder="Name" style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Company foundation</Text>
        <TextInput placeholder="Date" style={styles.input} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputLabel}>Document</Text>
        <TextInput placeholder="Cnpj" style={styles.input} />
      </View>
    </Animated.View>
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleForm} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>Toggle Forms</Text>
      </TouchableOpacity>
      <View style={styles.formsView}>
        {renderPrimaryForm()}
        {renderSecondaryForm()}
      </View>
    </View>
  );
};

export default Form;
