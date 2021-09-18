import React from 'react';
import { StyleSheet } from 'react-native';
import {ContinueBtn} from '_atoms';
import {Colors, Typography} from "../../../styles";
import { VStack, Text } from 'native-base';

const RegisterOutro = ({ navigation }) => {
  return (
    <VStack width="90%" mx={3}>
      <Text fontSize="2xl" style={styles.text}>You finish you little shit</Text>
      <Text fontSize="lg" mt={2} style={styles.text}>Good Fucking job</Text>

      <ContinueBtn style={styles.marginTop} text="Finish" fontSize={Typography.FONT_SIZE_14} 
      onPress={() => {
        console.log("Finish");
      }}/>
    </VStack>
  );
};

export default RegisterOutro;

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
