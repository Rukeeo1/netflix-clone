import Reaact from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home/Home';
import Header from '../shared/Header';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (<Tab.Navigator screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
            border: 0,
            backgroundColor: '#00000f'
        },

        tabBarItemStyle: {
            display: 'none'
        }
    })}
    >
        <Tab.Screen name='Home' component={Home} options={{
            headerLeft: () => null,
            headerTitle: () => <Header title={''} />,
            headerStyle: {
                backgroundColor: '#000',
                opacity: 1
            },
        }} />
        
    </Tab.Navigator>)

}

export default TabNavigator