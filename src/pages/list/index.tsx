import React,{ useState, useContext,useRef } from "react";
import { style } from "./styles";
import { Ball } from "../../components/Ball";
import { Input } from "../../components/Input";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { Text, TouchableOpacity, View, FlatList} from 'react-native'
import { AuthContextType, PropCard } from "../../global/Props";
import { Directions, Swipeable} from 'react-native-gesture-handler';


export default function List (){

    const {taskList, handleDelete, handleEdit}   = useContext<AuthContextType>(AuthContextList)
    const swipeableRefs = useRef([]);

    const renderRightActions = () =>{
       return(
        <View style={style.button}>
                <AntDesign
                    name="delete"
                    size={20}
                    color={'#FFF'}
                />
            </View>
        )
    }

    const renderLeftActions = () =>{
       return(
        <View style={[style.button,{backgroundColor:themas.colors.blueLigth}]}>
                <AntDesign
                    name="edit"
                    size={20}
                    color={'#FFF'}
                />
            </View>
        )
    };

    const handleSwipeOpen = (directions:'right' | 'left',item,index) => {
        if(directions == 'right'){
            handleDelete(item)
        } else {
            handleEdit(item)
        }
        swipeableRefs.current[index]?.close()
    }

    const _renderCard = (item:PropCard,index)=>{
        return(
            <Swipeable
                ref={(ref) => {swipeableRefs.current[index] = ref}}
                key={index}
                renderRightActions={renderRightActions}
                renderLeftActions={renderLeftActions}
                onSwipeableOpen={(directions)=>handleSwipeOpen(directions,item,index)}            
                >
            <View style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                    <Ball color="red"/>                
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    </View>
                    {/* <Flag /> */}
                </View>
            </View>
            </Swipeable>
        )
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, <Text style={{fontWeight:'bold'}}>Thiago</Text></Text><Text style={style.greeting}>Qual será o pedido de hoje?</Text>
                <View style={style.boxInput}>
                <Input 
                    IconLeft={MaterialIcons}
                    iconLeftName="search"
                />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{marginTop:40,paddingHorizontal:30}}
                    keyExtractor={(item,index)=>item.item.toString()}
                    renderItem={({item,index})=>{return (_renderCard(item,index))}}
                />
            </View>
        </View>
    )
}


