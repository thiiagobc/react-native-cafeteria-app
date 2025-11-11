import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { Input } from "../components/Input";
import { themas } from "../global/themes";
import {Modalize} from 'react-native-modalize';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomDateTimerPicker from "../components/CustomDateTimePicker";
import { Alert, Dimensions, Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { PropCard } from "../global/Props";


export const AuthContextList:any = createContext({});


export const AuthProviderList = (props:any):any =>{
    const modalizeRef = useRef<Modalize>(null);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [item,setItem] = useState(0);
    const [taskList,setTaskList] = useState([])


    const onOpen = ()=>{
        modalizeRef?.current.open()
    };

    const onClose = ()=> {
        modalizeRef?.current?.close();
    }

    useEffect(()=>{
        get_taskList()
    },[])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (date) => {
        setSelectedTime(date)
    };

    const handleSave = async() =>{         // PARA O USUARIO PREENCHER OS CAMPOS DENTRO DO MODAL
            if(!title || !description){
                return Alert.alert('Atenção', 'Preencha os campos corretamente')
            }
            try {
                const newItem = {
                    item:item !== 0?item:Date.now(),
                    title,
                    description,
                    timeLimite:new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        selectedDate.getDate(),
                        selectedDate.getHours(),
                        selectedTime.getMinutes()
                    ).toISOString(),
                }


                const storageData = await AsyncStorage.getItem('taskList');
                let taskList:Array<any> = storageData ? JSON.parse(storageData):[];

                const itemIndex = taskList.findIndex((task)=>task.item === newItem.item)

                if(itemIndex >= 0){
                    taskList[itemIndex] = newItem
                } else {
                    taskList.push(newItem)
                }
                
                await AsyncStorage.setItem('taskList',JSON.stringify(taskList))

                setTaskList(taskList)
                setData()
                onClose()
                
            } catch (error) {
                console.log("Erro ao salvar o item:",error)
            }
        
    }

    const setData = ()=>{
        setTitle('')
        setDescription('')
        setItem(0)
        setSelectedDate(new Date());
        setSelectedTime(new Date());
    }

    async function get_taskList() {
    try {
        const storageData = await AsyncStorage.getItem('taskList');
        const taskList = storageData ? JSON.parse(storageData):[]
        setTaskList(taskList)
    } catch (error) {
        console.log(error)
    }
}

    const handleDelete = async (itemToDelete)=>{
        try {
            const storageData = await AsyncStorage.getItem('taskList')
            const taskList:Array<any> = storageData ? JSON.parse(storageData):[]

            const updatedTaskList = taskList.filter(item=>item.item !== itemToDelete.item)

            await AsyncStorage.setItem('taskList',JSON.stringify(updatedTaskList))
            setTaskList(updatedTaskList)

        } catch (error) {
            console.log('Erro ao excluir o item', error)
        }
    }

    const handleEdit = async (itemToEdit:PropCard)=>{ 
        try {
            setTitle(itemToEdit.title)
            setDescription(itemToEdit.description)
            setItem(itemToEdit.item)

            const timeLimit = new Date(itemToEdit.timeLimit);
            setSelectedDate(timeLimit);
            setSelectedTime(timeLimit);

            onOpen()
        } catch (error) {
            console.log('Erro ao editar')
        }
    }

    const _container = () =>{
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios'?'padding':'height'}
            >
            
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>onClose()}>
                            <MaterialIcons
                                name="close"
                                size={30}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>Criar tarefa</Text>
                        <TouchableOpacity onPress={()=>handleSave()}>
                            <AntDesign
                                name="check"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Input 
                            title="Título:"
                            labelStyle={styles.label}
                            value={title}
                            onChangeText={setTitle}
                        />
                        <Input 
                            title="Descrição:"
                            labelStyle={styles.label}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <View style={{width:'40%'}}>
                            <View style={{flexDirection:'row',gap:10,width:'100%'}}>
                                <TouchableOpacity onPress={()=>setShowDatePicker(true)} style={{width:200}}>
                                <Input 
                                    title="Data Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedDate.toLocaleDateString()}
                                    onPress={()=>setShowDatePicker(true)}
                                /> 
                                </TouchableOpacity>
                                <TouchableOpacity style={{width:100}}onPress={()=>setShowTimePicker(true)}>
                                <Input 
                                    title="Hora Limite"
                                    labelStyle={styles.label}
                                    editable={false}
                                    value={selectedTime.toLocaleTimeString()}
                                    onPress={()=>setShowTimePicker(true)}
                                /> 
                                </TouchableOpacity>
                            </View>
                        <CustomDateTimerPicker 
                            onDateChange={handleDateChange}
                            setShow={setShowDatePicker}
                            show={showDatePicker}
                            type={'date'}
                        
                        />
                        <CustomDateTimerPicker 
                            onDateChange={handleTimeChange}
                            setShow={setShowTimePicker}
                            show={showTimePicker}
                            type={'time'}
                        
                        />
                        </View>
                        {/* <View style={styles.containerFlag}>
                            <Text style={styles.label}>Flags:</Text>
                            <View style={styles.Rowflags}>
                                
                            </View>
                        </View> */}
                    </View>
                
            </KeyboardAvoidingView>
        )
    }

    return (
        <AuthContextList.Provider value={{onOpen,taskList,handleDelete,handleEdit}}>
            {props.children}
            <Modalize
                ref={modalizeRef}
                childrenStyle={{ height: Dimensions.get('window').height/1.7}}  // TAMANHO DA CAIXA DO MODAL!
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContextList);

export const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    header:{
        width:'100%',
        height:40,
        paddingHorizontal:40,
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    content:{
        width:'100%',
        paddingHorizontal:20,
    },
    containerFlag:{
        width:'100%',
        padding:10
    },
    label:{
        fontWeight:'bold',
        color:'#000'
    },
    // Rowflags:{
    //     flexDirection:'row',
    //     gap:10,
    //     marginTop:10
    // }
})