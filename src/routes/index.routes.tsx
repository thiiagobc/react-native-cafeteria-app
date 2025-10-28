import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";

export default function Routes(){
    const Stack:any = createStackNavigator();   //any adicionado.

    return (
        <Stack.Navigator
            initialRouteName="Login"    
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor:"#4B2E2B"           // COR DA TELA
                }
            }}
        >    

            <Stack.Screen 
                name = "Login"
                component={Login}
                />
            <Stack.Screen 
                name = "BottomRoutes"
                component={BottomRoutes}
                />
        </Stack.Navigator>
           
    )
}