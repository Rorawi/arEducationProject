import React from 'react';
import { Image, Text } from 'react-native';
import {View, StyleSheet} from 'react-native';

const ContestComponent = ({name,status,contributions,profile,badge}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={profile} style={{width:100,height:100,borderRadius: 60,borderColor: '#F7F3A6',borderWidth:3,marginRight: 20}}/>
                <Image source={badge} style={styles.imageBadge}/>
            </View>
            <View>
            <Text style={styles.textColor}>{name}</Text>
            <Text style={{color:'#fff',fontSize: 15,fontWeight:400}}>{status}</Text>
            <Text style={{color:'#fff',fontSize: 15,fontWeight:400}}>{contributions}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection:'row',
        marginVertical: 20,
        width: 390,
        borderBottomColor: '#F7F3A6',
        borderBottomWidth: 2
      },

      textColor: {
        color: '#F7F3A6',
        fontSize:16.4,
        fontWeight: 700
      },

      imageBadge: {
        width:46,
        height:46,
        alignSelf:'flex-end',
        position:'relative',
        bottom: 30,
        left:-10
      },
})

export default ContestComponent;
