/*import { AsyncStorage } from 'react-native'
const getShoppingList = async () =>{
  try {
    const value = await AsyncStorage.getItem('@cart');
    if (value !== null){
     return JSON.parse(value);
    }
  } catch (error) {
  return [];
  }
}
export default getShoppingList;
