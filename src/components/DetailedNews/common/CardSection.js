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
        padding: 4,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
    }
};

export { CardSection };
