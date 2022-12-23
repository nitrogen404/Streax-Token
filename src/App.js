import React from "react";
import { useState, useEffect } from "react";
import abi from "./utils/streax.json";
import Transactions from "./Components/Transactions";
import {ethers} from "ethers";


function App() {
	const contractAddress = "0xF83C612381B04d06B1929fdAeb00F6977c22363e";
	
	const[hasmetaMask, sethasmetaMask] = useState(true);
	const [currentAcc, setCurrentAcc] = useState("");
	const [isConnected, setIsConnected] = useState(false);
	const {ethereum} = window;
	const connectWallet = async() => {
    
	try {
		if (!ethereum) {
			sethasmetaMask(false)
		}
		const accounts = await ethereum.request({
			method: 'eth_requestAccounts',
		});

		setCurrentAcc(accounts[0]);
		setIsConnected(true);

	} catch(err) {
      	setIsConnected(false);
      	console.log("Metamask connection failed because", err);
    	}
  	}
  
  return (
    <div className="App">
      <h1 className="name">Streax Token</h1>
      <p>Contract Address {contractAddress}</p>
      <button className="connectwallet" onClick={connectWallet}>Connect Wallet</button>
      <Transactions></Transactions>
    </div>
  );
}

export default App;
