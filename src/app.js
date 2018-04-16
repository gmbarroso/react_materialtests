import React, { Component } from 'react';
import logo from './logopagarme.png';
import './app.css';

import HelloWorld from './helloworld/helloworld';
import ContaClick from './conta/contaclick';

import Button from 'material-ui/Button';

import Switches from './switch/switch';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contador React</h1>
        </header>
        <div className="App-intro container">
          <div>
            <HelloWorld nome="Dead Space" />
            <HelloWorld nome="Mass Effect" />
            <HelloWorld nome="Battlefront 2" />

          </div>
          <div>
            <ContaClick />
          </div>
          <div>
            <Button className="testfontGoogle" variant="raised" color="primary">
              Button
            </Button>
          </div>
          <div>
            {/* <Switch checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" /> */}
            <Switches />
          </div>
        </div>

      </div>

    );
  }
}

export default App;
