import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="List" 
        component={List} 
    />
    <Tab.Screen
        name="User"
        component={User}
    />
    </Tab.Navigator>
  );
}