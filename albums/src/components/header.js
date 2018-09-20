//Import libraries
import React from "react";
import { Text, View } from "react-native";

//Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#eff0f2",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    elevation: 4,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export default Header;
