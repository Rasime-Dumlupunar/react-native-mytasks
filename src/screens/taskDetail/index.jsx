import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppColors } from '../../theme/color';
import { Button, Divider } from '@ui-kitten/components';
import moment from 'moment';
import { setCategory } from '../../utils/function';
import { status, taskValues } from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;

  // delete butonu taskları silmek için
  const deleteTask = async () => {
    try {
      // mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if(savedTasks === null) {
        return; // kayıtlı görev yoksa fonksiyonu durdur
      }
      const tasks = JSON.parse(savedTasks);

      //silinecek görevi filtrele
      const filteredTasks = tasks.filter(task=> task.id !==item.id);
      //filtrelenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      Alert.alert('Görev Silindi');
    } catch (error) {
      console.log(error);
      
    }
  };

  // update butonları için güncelleme
  const updateTask = async newStatus => {
    try {
      // mevcut görevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if(savedTasks === null) {
        return; // kayıtlı görev yoksa fonksiyonu durdur
      }
      const tasks = JSON.parse(savedTasks);

      // güncellenecek görevi bul
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {
            ...task, 
            status: newStatus, // yeni durumu uygula
          };
        }
        return task;
      });

      //güncellenmiş görevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('görev güncellendi', updateTask);
      
    } catch (error) {
      console.log('Görev güncellenirken hata oluştu:', error);
      
    }
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider/>

        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider/>
        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>Start Date:</Text>
          <Text>{moment(item.startDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider/>
        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>End Date:</Text>
          <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
        </View>
        <Divider/>
        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider/>
        <View style={{flexDirection: "row", justifyContent: 'space-between', paddingVertical:15}}>
          <Text style={{ fontSize: 18, fontWeight: '500'}}>Status:</Text>
          <Text>{taskValues.find(task => task.status === item?.status)?.title}</Text>
        </View>
        <Divider/>
      </ScrollView>

      <View>
        <Button style={styles.button} onPress={()=> updateTask(status.PENDING)} status='primary' >START</Button>
        <Button style={styles.button} onPress={()=> updateTask(status.COMPLETED)}  status='success' >COMPLATED</Button>
        <Button style={styles.button} onPress={()=> updateTask(status.CANCEL)}  status='danger' >CANCEL</Button>
        <Button style={styles.button} onPress={deleteTask} status='warning' >DELETE</Button>

 
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: AppColors.WHITE,
    paddingHorizontal:10,
    marginBottom:45,
  },
  button: {
    marginVertical:5,
    margin: 10,
    borderRadius:20,
    

  }
})