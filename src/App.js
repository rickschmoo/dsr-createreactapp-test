import React, { Component } from 'react';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import { Input } from '@salesforce/design-system-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <IconSettings iconPath="/assets/icons">
        <section className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
          <div className="slds-col--padded">
            <h1 className="slds-text-title_caps slds-p-vertical--medium">
              Base Input with visible label
            </h1>
            <Input id="base-id" label="My Label" placeholder="My placeholder" />
          </div>
          <div className="slds-col--padded">
            <h1 className="slds-text-title_caps slds-p-vertical--medium">
              Base Input with hidden label (assistive text)
            </h1>
            <Input
              assistiveText={{ label: 'My label' }}
              id="assistiveLabel-id"
              placeholder="My placeholder"
            />
          </div>
          <div className="slds-col--padded">
            <h1 className="slds-text-title_caps slds-p-vertical--medium">
              Base Input with Fixed Text
            </h1>
            <Input
              id="fixed-text-id"
              fixedTextLeft="$"
              label="Total amount"
              placeholder="Enter amount in USD"
            />
          </div>
        </section>
      </IconSettings>
      </div>
    );
  }
}

export default App;
