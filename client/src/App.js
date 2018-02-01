import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  handleRandomWallet = () => {
    alert('Handle Random Wallet');
  };
  handleGetBalance = () =>{
    alert('The current balance is:...');
  };
  handleDeposit = () =>{
    const sum = document.getElementById('depositSum').value;
    alert(`deposit ${sum} Eth`);
    document.getElementById('depositSum').value = undefined;
  };
  handleWithdraw = () =>{
    const sum = document.getElementById('withdrawSum').value;
    alert(`withdraw ${sum} Eth`);
    document.getElementById('withdrawSum').value = undefined;
  };
  handleGetKey = () =>{
    alert('The private key of this wallet is..');
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Ethereum Wallet</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleRandomWallet}>Get Random Wallet</button><br/>
          <button onClick={this.handleGetBalance}>Get Current Balance</button><br/>
          <button onClick={this.handleGetKey}>Get Private Key</button><br/>
          <input type="number" min="0" placeholder="amount to deposit" id="depositSum"/>
          <button onClick={this.handleDeposit}>Deposit</button><br/>
          <input type="number" min="0" placeholder="amount to withdraw" id="withdrawSum"/>
          <button onClick={this.handleWithdraw}>Withdraw</button><br/>
        </p>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
