import React, { Component } from 'react';
import { StyleSheet, Text,View, Image} from 'react-native';
class TentangKami extends Component {
    render(){
        return (
            <View style={styles.boxContent}>
                <Image source={require('./logo-uzone.png')} style={styles.mnetstyle} />
                <Text>Metra-Net (Metranet) is a subsidiary of PT. Telekomunikasi Indonesia, Tbk (Telkom) which was formed since April 17th , 2009. Our vision is to become most reliable monetizing partner in online industry. In its development, various business initiatives have been carried out, such as mobile content, commerce, online ticketing, and social network game publishers.</Text>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    mnetstyle: {
        width: 300,
        height: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },
    boxContent: {
        backgroundColor: '#FFF',
        padding: 20,
        flex:1
      },
    boxImages: {
        marginTop:20,
        marginBottom:20,
        textAlign: 'center',
        width: '100%'
    },
    logoStyle: {
        width: 135,
        height:40,
        marginLeft: 'auto',
        marginRight: 'auto'
      },    
}); 
export default TentangKami;