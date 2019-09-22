import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={style.containerStyle}>
            {props.children}
        </View>
    );
};

const style = {
    containerStyle: {
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#F2F2F2',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        position: 'relative',
        width: 300, 
        height: 320,
    }
};

export { CardSection };
