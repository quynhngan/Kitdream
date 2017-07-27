import React,{Component} from 'react';
import{ View, Text,TouchableOpacity,Dimensions,StyleSheet,Image} from 'react-native';
import drink from "/Users/quynhngan/KitDream/image/search_icon/drink.png";
import main from "/Users/quynhngan/KitDream/image/search_icon/main.png";
import dessert from "/Users/quynhngan/KitDream/image/search_icon/dessert.png";
import star from "/Users/quynhngan/KitDream/image/search_icon/star.png";
import hard from "/Users/quynhngan/KitDream/image/search_icon/hard.png";
import medium from "/Users/quynhngan/KitDream/image/search_icon/medium.png";
import HeaderSearch from "./HeaderSearch";
const {height,width} = Dimensions.get('window');
export default class Search extends Component{

  render(){
    const {wrapper,textTitle,imageStyle,text,_imageStyle} = styles;
    return(
      <View style = {{ flex: 1}}>
<HeaderSearch/>
<View>
<Text style = {textTitle}> Category </Text>
<View style = {wrapper}>
<TouchableOpacity>
<View>
<Image source ={main} style={imageStyle}/>
<Text style ={textTitle}> Main </Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View>
<Image source ={dessert} style={imageStyle}/>
<Text style ={textTitle}> Dessert </Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View>
<Image source ={drink} style={imageStyle}/>
<Text style ={textTitle}> Drink </Text>
</View>
</TouchableOpacity>
</View>
</View>
<View>
<Text style = {textTitle}> Difficuty </Text>
<View style = {wrapper}>
<TouchableOpacity>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Easy </Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Medium </Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Hard </Text>
</View>
</TouchableOpacity>
</View>
</View>
<View>
<Text style = {textTitle}> Preparation-Time </Text>
<View style = {wrapper}>
<TouchableOpacity>
<Text style = {text}>Under 30 min</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style = {text}>Under 60 min</Text>
</TouchableOpacity>
<TouchableOpacity>
<Text style = {text}>Upper 60 min</Text>
</TouchableOpacity>
</View>
</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height /5,
    backgroundColor: '#FFF2F4',
    width: width,
    marginTop: 15,
    justifyContent:'space-between',
    flexDirection:'row',

  },
  textTitle: {
    paddingTop: 15,
    paddingLeft: 15,
    fontSize:14,
    color: '#95989A',
    marginLeft: 10,
  },
imageStyle:{
  marginLeft : 30,
  marginRight:30,
  marginTop:30,
  height :40,
  width :40,

},
_imageStyle:{
  marginLeft : 30,
  marginRight:30,
  marginTop:30,
  height :20,
  width :20,
},
text :{
  margin: 15,
  paddingTop: 35,
  fontSize:14,
  color: '#95989A',
}

});
