import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AGR_ABI, AGR_ADDRESS } from '/Users/maksimalsevskih/Desktop/TestApp/blockchain/MobileProject/src/config.js';


export default function App() {

    const [account, setAccount] = useState(); // state variable to set account.
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    useEffect(() => {
        async function load() {
            // const Project = artifacts.require('./contracts/contracts/Agriculture.sol');

            // const project = await Project.deployed()
            // const person = await project.balances('0x087c4E45946bf701a3a1a79D346C78f1304E0E93')

            // console.log('person =', person);



            const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7547');
            //const web3 = new Web3('http://localhost:7546');
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);
            //console.log(accounts);


            const contract = new web3.eth.Contract(AGR_ABI, AGR_ADDRESS);
            console.log(await contract.methods.balances("0x087c4E45946bf701a3a1a79D346C78f1304E0E93").call())
            //0x087c4E45946bf701a3a1a79D346C78f1304E0E93
            await contract.methods.InitBalance(
                "0x087c4E45946bf701a3a1a79D346C78f1304E0E93", 1).call();
            //await sleep(3000);
            await contract.methods.SetBalance(
                "0x087c4E45946bf701a3a1a79D346C78f1304E0E93", 1, 37).call();
            //await sleep(3000);
            // var balance = await contract.methods.GetBalance2(
            //   "0x087c4E45946bf701a3a1a79D346C78f1304E0E93").call();
            // console.log(balance);
            //var one = await contract.methods.GetOne().call();
            //console.log(one);
        }

        load();
    }, []);


    return (
        <View style={styles.container}>
            <Text>Agriculture mobile app</Text>
            <StatusBar style="auto" />
            <div>
                Your account is: {account}
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
