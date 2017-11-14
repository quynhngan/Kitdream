import React,{Component} from 'react';
import{ View, Text,TouchableOpacity,Dimensions,StyleSheet,Image,TouchableHighlight,Button} from 'react-native';
import drink from "/Users/quynhngan/KitDream/image/search_icon/drink.png";
import main from "/Users/quynhngan/KitDream/image/search_icon/main.png";
import dessert from "/Users/quynhngan/KitDream/image/search_icon/dessert.png";
import star from "/Users/quynhngan/KitDream/image/search_icon/star.png";
import hard from "/Users/quynhngan/KitDream/image/search_icon/hard.png";
import medium from "/Users/quynhngan/KitDream/image/search_icon/medium.png";
import global from '/Users/quynhngan/KitDream/Components/Test/global.js'

const {height,width} = Dimensions.get('window');
export default class FilterRecipe extends Component {
static navigationOptions = {headerTintColor:"white" ,title: 'Filter',headerStyle: {
         backgroundColor:"#FFC0CB"
       }}
   constructor(props) {
     super(props);
     this.state = {
       difficuty: null,
       category: null,
       preparation_time: null,
     }
   }
  setCategory(category) {
    this.setState({category: category});
  }
  setDifficuty(difficuty) {
    this.setState({difficuty: difficuty});
  }
  setPretime(preparation_time){
    this.setState({preparation_time: preparation_time});
  }

  render(){
    const {wrapper,textTitle,imageStyle,text,_imageStyle,textDone,_textTitle,container} = styles;
    return(
      <View style = {container}>
<View>
<Text style = {_textTitle}> Category </Text>
<View style = {wrapper}>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setCategory('main')}
>
<View>
<Image source ={main} style={imageStyle}/>
<Text style ={textTitle}> Main </Text>
</View>
</TouchableHighlight>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setCategory('dessert')}
>
<View>
<Image source ={dessert} style={imageStyle}/>
<Text style ={textTitle}> Dessert </Text>
</View>
</TouchableHighlight>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setCategory('drink')}
>
<View>
<Image source ={drink} style={imageStyle}/>
<Text style ={textTitle}> Drink </Text>
</View>
</TouchableHighlight>
</View>
</View>
<View>
<Text style = {_textTitle}> Difficuty </Text>
<View style = {wrapper}>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setDifficuty('easy')}
>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Easy </Text>
</View>
</TouchableHighlight>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setDifficuty('medium')}
>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Medium </Text>
</View>
</TouchableHighlight>
<TouchableHighlight underlayColor="white"
onPress = {() => this.setDifficuty('hard')}
>
<View>
<Image source ={star} style={imageStyle}/>
<Text style ={textTitle}> Hard </Text>
</View>
</TouchableHighlight>
</View>
</View>
<View>
<Text style = {_textTitle}> Preparation-Time </Text>
<View style = {wrapper}>
<TouchableOpacity
onPress = {() => this.setPretime(15)}
>
<Text style = {text}>Under 15 min</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {() => this.setPretime(40)}
>
<Text style = {text}>Under 60 min</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {() => this.setPretime(60)}
>
<Text style = {text}>Upper 60 min</Text>
</TouchableOpacity>
</View>
</View>
<TouchableOpacity
onPress={()=>{
  this.props.navigation.navigate('Recipe',{
    difficuty: this.state.difficuty,
    category: this.state.category,
    preparation_time: this.state.preparation_time
  })}}
>
<Text style={textDone}> Done </Text>

      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height /6,
    backgroundColor: '#FFEBEF',
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
},
textDone: {
  paddingTop: 20,
  fontSize:18,
  color: '#FFC0CB',
  marginLeft: 300,

},
_textTitle: {
  paddingTop: 15,
  paddingLeft: 15,
  fontSize:15,
  color: '#5D5D5D',
  marginLeft: 10,
},
container:{
  backgroundColor: '#FFFFFF',
  flex: 1,
}
});
