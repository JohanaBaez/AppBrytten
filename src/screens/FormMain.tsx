import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const FormMain= ()=>{

    return(
        <View style={styles.container}>
        <StatusBar style="light" />
        
        <View style={styles.header}>
  
  </View>
        <View style={styles.body}>
  
        </View>

        <View style={styles.foot}>
       
        </View>
       
    </View>
    )
}

export default FormMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    padding: 0,
    },
    header:{
        backgroundColor: '#27A55E', 
        flex:1.5,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        paddingLeft:'60%'
        
    },
    body:{
        backgroundColor: '#4D5FAC', 
        flex:10,
    },
    foot:{
        flex:1,
        backgroundColor: '#28333F',
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal: 20,

        
    }
});

