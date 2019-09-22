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
        borderRadius: 15,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 3,
        width: 300, 
        height: 320,
    }
};
export { Card };
