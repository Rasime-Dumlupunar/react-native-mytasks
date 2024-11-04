import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {TASKDETAIL} from '../../utils/routes';
import {taskValues} from '../../utils/constant';
import {setCategory} from '../../utils/function';


const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor: taskValues.find(task => task.status === item.status)?.color,
          padding: 3,
          borderRadius: 5,
        }}>
        {taskValues.find(task => task.status === item?.status)?.icon}
      </View>

      <View style={{flex:1, marginLeft: 10}}>
        <Text style={{fontSize: 17, margin: 2, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 15,margin: 2,fontWeight: '300',color: '#363636',
          }}>
          {item.description}
        </Text>

            <View>
              <Text style={{fontSize:14, fontWeight:'300', color:'gray'}}>
                {moment(item.startDate).format('DD/MM/YYYY')}-
                {moment(item.endDate).format('DD/MM/YYYY')}
                </Text>
            </View>
      </View>

      <View>
        <Text style={{fontSize:14, fontWeight:'300', color:'gray'}}>
          {setCategory(item.category)}
        </Text>
      </View>

    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    padding: 15,
    margin: 15,
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOpacity: 5,
    shadowOffset: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
