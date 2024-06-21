import React from 'react';
import {View, Text} from 'react-native';
import { Image } from 'react-native-elements';
import { scale, verticalScale } from 'react-native-size-matters';

const Home = () => {
    return (
        <View style={{width:'100%',
            height:verticalScale(50),
            backgroundColor:'black',
            position:'absolute',
            top:0}}>
            <View >
            {/* <Image source={require('./src/images/settings.png')} /> */}
                <Text
                    style={{
                    color: 'white',
                    fontSize: 40,
                    fontWeight: '700',
                    width: '300%',
                    marginLeft: '8%',
                    }}>
                    Home
                </Text>
                
            </View>
            
        </View>
    );
};

export default Home;
