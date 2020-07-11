import styled from "styled-components/native";

export const ToggleContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: 220px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  border-radius: 30px;
`;

export const ToggleText = styled.Text`
  font-family: montserrat-medium;
  font-size: 16px;
  color: ${({ color }) => color};
`;

export const ToggleIcon = styled.View`
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 25px;
  position: absolute;
  left: 0px;
  margin: 5px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;
