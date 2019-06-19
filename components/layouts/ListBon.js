import React, { Component } from 'react';
import { StyleSheet, Text,View,ListView, Image} from 'react-native';
class ListBon extends Component {

	constructor() {  
        super();  
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {  
            dataSource: ds.cloneWithRows(['Bon Makan Mc Donald','Bon Transport ke Bogor', 'Bon Transport pulang ke jakarta','Bon reimbursement hotel projek Wifi', 'Perl']),  
        };  
    }  

    render(){
        return (
            <View style={styles.boxContent}>
                <ListView  
                dataSource={this.state.dataSource}  
                renderRow={  
                    (rowData) =>  
                        <Text style={{fontSize: 20}}>{rowData}</Text>}  
            	/>  
            </View>
        );    
    }
}

const styles = StyleSheet.create({
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
export default ListBon;