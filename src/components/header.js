// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

//Create the component
const Header = (props) => {
  const { textStyle, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available in other parts of the App
export default Header;
