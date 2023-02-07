import React, {useState} from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquereScreen = () => {
 return (
    <View>
        <ColorCounter color = 'Red' />
        <ColorCounter color = 'Green' />
        <ColorCounter color = 'Blue' />
    </View>
 ); 
};

const styles = StyleSheet.create({

});

export default SquereScreen;