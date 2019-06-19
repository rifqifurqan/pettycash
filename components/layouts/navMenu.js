import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

class NavMenu extends Component {
  


    render(){
        return (
         <View style={styles.navMenu}>
            
            <Link to="/">
                <Text style={styles.navMenuText}>Buat Bon</Text>
            </Link>
            <Link to="/Listbon">
                <Text style={styles.navMenuText}>List Bon</Text>
            </Link>
            <Link to="/tentangkami">
                <Text style={styles.navMenuText}>Tentang Metranet</Text>
            </Link>
          </View>
        );    
    }
}

const styles = StyleSheet.create({
    navMenu : {
        flexDirection: 'row',
        backgroundColor: '#E42314'
      },
      navMenuText: {
        color: '#FFF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
      }    
}); 
export default NavMenu;