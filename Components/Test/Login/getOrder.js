import { AsyncStorage } from 'react-native'
const getOrder = async () =>{
  try {
    const value = await AsyncStorage.getItem('@order');
    if (value !== null){
     return JSON.parse(value);
    }
  } catch (error) {
  return {};
  }
}
export default getOrder;
