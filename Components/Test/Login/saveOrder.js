import {AsyncStorage} from 'react-native';

const saveOrder = async (order) =>{
  await AsyncStorage.setItem('@user',JSON.stringify(order))
}
export default saveOrder;
