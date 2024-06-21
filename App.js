import React, { useState } from 'react';
import { Image } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import Home from './src/screens/Home';
import Learn from './src/screens/Learn';
import Course from './src/screens/Course';
import WatchList from './src/screens/WatchList';


const App = () => {
  const [selectedTab,setSelectedTab]= useState(0)

  // const CustomTabButton = ({children, onPress})

  return (
    <>
    <View style = {styles.container}>
      {selectedTab==0?<Home/>:selectedTab==1?<Learn/>:selectedTab==2?<Pin/>:selectedTab==3?<Course/>:<watchList/>}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <TouchableOpacity style={styles.bottomTab} onPress={() => {setSelectedTab(0);}}>
            <View style={[styles.tabIconBg, {backgroundColor:selectedTab==0?'yellow': 'white'}]}>
            <Image source={require('./src/images/home.png')} style={styles.tabIcon}/> 
            </View>
            <Text style={{color: 'white', fontSize:16, color:selectedTab==0?'yellow': 'white'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => {setSelectedTab(1);}}>
            <View style={[styles.tabIconBg, {backgroundColor:selectedTab==1?'yellow': 'white'}]}>
              <Image source={require('./src/images/learn.png')} style={styles.tabIcon}/> 
            </View>
            <Text style={{color: 'white', fontSize:16, color:selectedTab==1?'yellow': 'white'}}>Learn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{top:-30, justifyContent:'center', alignItems:'center', ...styles.shadow}}>
            <View style={{width:70, height:70, borderRadius:35, backgroundColor:'yellow'}}>
              <Image source={require('./src/images/pin.png')} style={{width:40, height:40, tintColor:'black', marginTop:15, marginLeft:13}}/>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomTab} onPress={() => {setSelectedTab(3);}}>
            <View style={[styles.tabIconBg, {backgroundColor:selectedTab==3?'yellow': 'white'}]}>
            <Image source={require('./src/images/course.png')} style={styles.tabIcon}/>
            </View>
            <Text style={{color: 'white', fontSize:16, color:selectedTab==3?'yellow': 'white'}}>Courses</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} onPress={() => {setSelectedTab(4);}}>
            <View style={[styles.tabIconBg, {backgroundColor:selectedTab==4?'yellow': 'white'}]}>
            <Image source={require('./src/images/watchlist.png')} style={styles.tabIcon}/> 
            </View>
            <Text style={{color: 'white', fontSize:16, color:selectedTab==4?'yellow': 'white'}}>WatchList</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


    </>
    
  );
}



export default App;

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'grey'
    },

    bottomNav:{
      width:'100%',
      height:verticalScale(70),
      backgroundColor:'black',
      borderTopStartRadius:scale(17),
      borderTopRightRadius:scale(17),
      position:'absolute',
      bottom:0
    },

    bottomNav2:{
      width:'100%',
      height:verticalScale(55),
      justifyContent:'space-evenly',
      alignItems:'center',
      flexDirection:'row'
    },

    bottomTab:{
      width:'20%',
      height:'100%',
      justifyContent:'center',
      alignItems:'center'
    },

    tabIcon:{
      width:scale(38),
      height:scale(38)
    },

    tabIconBg:{
      width:scale(28),
      height:scale(28),
      borderRadius:scale(17),
      justifyContent:'center',
      alignItems:'center'
    },
})





