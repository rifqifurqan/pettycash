import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Picker } from 'react-native';
import axios from 'axios';
class formBon extends Component {
      state = {
        resi : "",
        kurir: "jne",
        notifnya: "",
        result: ""
      }

    
      _submitFunction = () => { 
        if(this.state.resi.trim() === ""){
            this.setState({
            notifnya: "Apps masih tahap development",
          });
        }else{                
            this.setState({
              notifnya: "Apps masih tahap development",
            });  
            }  
      };
      _setResi = val => {
        this.setState({
          resi : val
        });
      }
      _setKurir = val => {
        this.setState({
          kurir : val
        });
      }    

   
    render(){
        return (
            <View style={styles.boxContent}>
            <Text style={styles.legendTitle}>
              Pilih Divisi
            </Text>
            <Text>
                {this.state.result}
            </Text>
            <Picker
              selectedValue={this.state.kurir}
              onValueChange={this._setKurir}
              style={{height: 50, width: '100%',marginTop:10,marginBottom: 10,borderWidth: 1,borderColor:'#333'}}>
              <Picker.Item label="TM" value="TM" />
              <Picker.Item label="Uzone" value="Uzone" />
              <Picker.Item label="Wifi.id" value="Wifi.id" />
              <Picker.Item label="Oona" value="Oona" />
              <Picker.Item label="UAD" value="UAD" />
            </Picker>          
            <Text style={styles.legendTitle}>
              Masukkan Nama 
            </Text>
  
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputStyle}
                placeholder="Nama Anda"
                onChangeText={this._setResi}
                value={this.state.resi}
              />
             
            </View>
            <Text style={styles.legendTitle}>
              Total Tagihan / Harga 
            </Text>
  
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.inputStyle}
                placeholder="Jumlah Tagihan"
                onChangeText={this._setResi}
                value={this.state.resi}
              />
             
            </View>
            <Text style={styles.notif}>{this.state.notifnya}</Text>
            <View style={styles.buttonSubmit}>
              <Button 
                  title="Submit"
                  style={styles.buttonStyle}
                  onPress={this._submitFunction}
                />            
            </View> 
          </View>
         
        );    
    }
}

const styles = StyleSheet.create({
    boxContent: {
        backgroundColor: '#FFF',
        padding: 20
      },
      textWhite: {
        color:'#FFF',
        fontSize: 16
      },
      legendTitle: {
        fontSize: 16,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
      },
      inputStyle: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        padding: 5,
        paddingLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '70%'
      },
      buttonStyle: {
        padding: 10,
        width: '30%'
      },
      inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding:10,
        paddingLeft:0,
        paddingRight:0,
        alignItems: 'center'
      },
      notif: {
        color: 'red',
        fontSize: 12
      },
      buttonSubmit: {
        marginTop: 10,
        marginBottom: 10
      }
}); 
export default formBon;