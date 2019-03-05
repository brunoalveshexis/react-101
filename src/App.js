import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './shared/state/configureStore'
import Input from './shared/components/Input'
import Button from './shared/components/Button'
import UsersList from './shared/components/UsersList';


export default class App extends Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Input placeholder="user id without @" />
        <Button text="Search" />
        <br /> 
        <UsersList />
      </Provider>
    )
  };
}