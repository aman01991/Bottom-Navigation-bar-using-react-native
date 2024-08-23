import React from 'react'
import { View, Text } from 'react-native'
import { verticalScale } from 'react-native-size-matters'

const WatchList = () => {
    return (
        <View style={{width:'100%', backgroundColor:'grey', height:verticalScale(60)}}>
            <Text style={{color: 'black',
                    fontSize: 50,
                    fontWeight: '700',
                    width: '300%',
                    marginLeft: '8%',}}>WatchList</Text>
        </View>
    )
}

export default WatchList
