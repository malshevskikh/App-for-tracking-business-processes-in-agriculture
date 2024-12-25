import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { StageType, Seed, AgroChain } from './BlockchainJS/contract.js';
//import { render } from 'react-dom';
//import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  // state variable to set account.
  const [account, setAccount] = useState();
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function load() {
      var addresses = [
        "0x087c4E45946bf701a3a1a79D346C78f1304E0E93",
        "0xd3079e170478BD9c3fB6A2BdD043C85FB5768B1A"
      ];
      var agroChain = new AgroChain();
      agroChain.InitBalance(addresses[0], StageType.A1);
      console.log(agroChain.GetBalance(addresses[0]));
      agroChain.SetBalance(addresses[0], StageType.A1, 999);
      console.log(agroChain.GetBalance(addresses[0]));
      agroChain.InitBalance(addresses[1], StageType.A2);
      agroChain.SendSeed(addresses[0], addresses[1], 100);
      console.log(agroChain.GetBalance(addresses[0]));
      console.log(agroChain.GetBalance(addresses[1]));
      //agroChain.SendSeed(addresses[1], addresses[0], 100);
      agroChain.Save();
      agroChain.Load();
      console.log(agroChain);
    }

    load();
  }, []);

  // if (this.state && !this.state.isLoading) {
  //   let items = [];
  //   var length = this.state.dataSource.length;
  //   for (var i = 0; i < length; i++) {
  //     var item = {};
  //     items.push(<Picker.Item label={i} value={item.title} key={i} />);
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text>Agriculture mobile app</Text>
      <TextInput
        style={styles.textBox}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="0x0000000000000000000000000000000000000000"
        keyboardType="default"
      />
      <Picker style={styles.comboBox}>
        {items}
      </Picker>
      {/* <Picker
        style={styles.comboBox}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <Button
        style={styles.buttons}
        // onPress={onPressLearnMore}
        title="Init balance"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const items = [1, 2, 3, 4, 5, 6];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#1a86c4'
  },
  textBox: {
    height: 40,
    width: 350,
    textAlign: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  comboBox: {
    height: 40,
    width: 350
  }
});