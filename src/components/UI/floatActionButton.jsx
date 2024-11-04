import {StyleSheet, TouchableOpacity } from 'react-native'
import { Add  } from 'iconsax-react-native';

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="32" color="#000000"/>
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2ccce4',
        justifyContent:'center',
        alignItems: 'center',
        width:70,
        height:70,
        position:'absolute',
        right: 20,
        bottom: 40,
        borderRadius:50,

    },
});