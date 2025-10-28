import React, { useContext } from "react";
import {Text, TouchableOpacity, View} from 'react-native'
import { style } from "./styles";
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";



export default ({state,navigation})=>{

    const {onOpen} = useContext<any>(AuthContextList)

    const go = (screenName:string)=>{
        navigation.navigate(screenName)
    }

    return (

        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("List")}>
                <AntDesign 
                    name="bars"
                    style={{opacity:state.index === 0?1:0.3,color:themas.colors.primary,fontSize:32}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.TabItemButton} onPress={()=>onOpen()}>
                <View style={{width:'100%', left:10,top:4}}>
                    <Entypo
                        name="plus"
                        size={40}  
                        color={"#FFF"}
                    />
                </View>
                <View style={{flexDirection:'row-reverse', width: '100%', right:10,bottom:10}}>
                    <MaterialIcons
                        name="edit"
                        color={"#FFF"}
                        size={30}
                    /> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={()=>go("User")}>
                <FontAwesome
                    name="user"
                    style={{opacity:state.index === 1?1:0.3,color:themas.colors.primary,fontSize:32}}               
                />
            </TouchableOpacity>

        </View>
    )
}