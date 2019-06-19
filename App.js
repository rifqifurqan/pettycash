import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Picker } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Formbon from './components/layouts/formBon';
import Listbon from './components/layouts/ListBon';
import TentangKami from './components/layouts/tentangKami';
import NavMenu from './components/layouts/navMenu';
export default class App extends Component {
    render(){
      const Formbonvar = () => <Formbon />;
      const Listbonvar = () => <Listbon />;
      const TentangKamivar = () => <TentangKami />;
      return (
        <NativeRouter>
        <View style={styles.container}>
          <View style={styles.topNav}>
            <Image source={require('./assets/images/logo-uzone.png')} style={styles.logoStyle} />
          </View>
          <NavMenu/>
          <Route exact path="/" component={Formbonvar} />
          <Route exact path="/Listbon" component={Listbonvar} />
          <Route exact path="/tentangkami" component={TentangKamivar} />
        </View>
        </NativeRouter>    
      );      
    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    paddingTop: 30
  },
  topDiv: {
    backgroundColor: '#FFF',
    height: 50,
    width: '100%'
  },
  logoStyle: {
    width: 135,
    height:40,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  topNav: {
    backgroundColor: '#FFF',
    height: 60,
    padding: 10,
    marginBottom: 20
  },

});
