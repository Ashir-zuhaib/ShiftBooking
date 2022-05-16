import { View,TouchableOpacity, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import moment from 'moment'
import { Todaydata, TomorData } from './MyshiftData'
const MyShifts = () => {
  
    // console.log('ss',moment().add(1, 'hours').format('HH:mm'))
  return (
    <ScrollView style={{flex:1}}>
      <View>
      <View style={{backgroundColor:theme.TitleBackground, height:40,justifyContent:'center' }}>
    <Text style={{fontWeight:'bold', fontSize:22, marginLeft:20,color:theme.TitleText}}>{moment().calendar().split(' ')[0]}</Text>
      </View>
     
    {Todaydata.map((data, index)=>(
        <View key={index} style={styles.card}>
        <View >
          <Text style={styles.timing}>
          {data.timestart}-{data.timeend}
          </Text>
          <Text style={styles.cityText}>
            {data.city}
          </Text>
        </View>
        <TouchableOpacity style={styles.Cancel}>
          <Text style={{color:theme.CancelText, fontWeight:'bold', fontSize:18}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      ))}
      <View style={{backgroundColor:theme.TitleBackground, height:40,justifyContent:'center' }}>
    <Text style={{fontWeight:'bold', fontSize:22, marginLeft:20,color:theme.TitleText}}>{moment().add(1,'days').calendar().split(' ')[0]}</Text>
      </View>
      {TomorData.map((data, index)=>(
        <View key={index} style={styles.card}>
        <View >
          <Text style={styles.timing}>
          {data.timestart}-{data.timeend}
          </Text>
          <Text style={styles.cityText}>
            {data.city}
          </Text>
        </View>
        <TouchableOpacity style={styles.Cancel}>
          <Text style={{color:theme.CancelText, fontWeight:'bold', fontSize:18}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      ))}
      <View style={{backgroundColor:theme.TitleBackground, height:40,justifyContent:'center' }}>
    <Text style={{fontWeight:'bold', fontSize:22, marginLeft:20,color:theme.TitleText}}>{moment().add(2, 'days').format("MMM DD")}</Text>
      </View>
      {TomorData.map((data, index)=>(
        <View key={index} style={styles.card}>
        <View >
          <Text style={styles.timing}>
          {data.timestart}-{data.timeend}
          </Text>
          <Text style={styles.cityText}>
            {data.city}
          </Text>
        </View>
        <TouchableOpacity style={styles.Cancel}>
          <Text style={{color:theme.CancelText, fontWeight:'bold', fontSize:18}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      ))}
  </View>
    
    </ScrollView>
  )
}

export default MyShifts
const styles = StyleSheet.create({
  card:{
    flexDirection:'row', 
  justifyContent:'space-between',
  paddingHorizontal:20, 
  height:80, 
  borderBottomColor:theme.TimeText,
   borderBottomWidth:1,
   alignItems:'center'
},
cityText:{
  color:theme.TitleText, 
  fontSize:16,
  paddingLeft:5
},
  timing:{ 
    fontSize:24, 
    color:theme.TitleText
  },
  Cancel:{borderColor:theme.Cancelborder,
     borderWidth:1,
      width:100,
      height:40,
      borderRadius:30,
       justifyContent:'center',
        alignItems:'center'
      },
    
})