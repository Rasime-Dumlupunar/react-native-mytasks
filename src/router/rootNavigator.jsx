import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ADDTASKS, TASKDETAIL, TASKS } from '../utils/routes';
import Home from '../screens/home';
import AddTask from '../screens/addtask';
import TaskDetail from '../screens/taskDetail';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
      
    </Stack.Navigator>

  )
}

export default RootNavigator;