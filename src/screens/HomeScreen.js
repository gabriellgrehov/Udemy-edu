import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
        <View>
          <Text style={styles.text}>Hi there</Text>
          <Button 
            onPress={() => navigation.navigate("Components")}
            title="Go to components screen demo"
          />
          <Button 
            title="Go to List demo"
            onPress={() => navigation.navigate("List")}   
          />
          <Button
            title="Image screen demo"
            onPress={() => navigation.navigate("Image")}
          />
           <Button
            title="Counter screen demo"
            onPress={() => navigation.navigate("Counter")}
          />
        </View>
        );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
