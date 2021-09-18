import React from 'react';
import { StyleSheet } from 'react-native';
import {ContinueBtn} from '_atoms';
import {Colors, Typography} from "../../../styles";
import { VStack, Text } from 'native-base';

const RegisterIntro = ({ navigation }) => {
  return (
    <VStack width="90%" mx={3}>
      <Text fontSize="2xl" style={styles.text}>Welcome to the register tutorial</Text>
      <Text fontSize="lg" mt={2} style={styles.text}>This is a simple tutorial, so dont be afraid.</Text>

      <ContinueBtn style={styles.marginTop} text="Continue" fontSize={Typography.FONT_SIZE_14} 
      onPress={() => {
        navigation.navigate("Name")
      }}/>
    </VStack>
  );
};

export default RegisterIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      color: Colors.PRIMARY

  },
  marginTop: {
      marginTop: 50
  }
});
