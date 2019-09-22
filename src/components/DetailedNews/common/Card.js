import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        
        <View style={styles.containerStyle}>
            { props.children }
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 20,
        // width: 370,   for  ios
    }
};
export { Card };
