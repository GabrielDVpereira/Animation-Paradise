import React from "react";
import Routes from "./templates/Routes";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <Routes />
    </>
  );
}
