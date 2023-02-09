import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { step0 } from "react-native/Libraries/Animated/Easing";

const reducer = (state, action) => {

    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        default: 
            state;
    }

}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
            <View>
                <Button title="Increase" onPress={() => {
                    dispatch({type: 'increament', payload: 1})    
                }}/>
                <Button title="Decrease" onPress={() => {
                    
                }}/>
                <Text>Current count: {}</Text>
            </View>
        );
};

const styles = StyleSheet.create({

});

export default CounterScreen;