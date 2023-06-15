import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardContent, CardHeader } from '@material-ui/core'
import { SubscribeForm } from './components/Subscribe/SubscribeForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Card>
            <b><CardHeader title="Subscribe to Botler's DECLASSIFIED* series to learn more about real world misconduct cases." /></b>
            <CardContent>
                <SubscribeForm />
            </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
