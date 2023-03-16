import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
            <Text>Image score - {props.imageScore}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageDetail