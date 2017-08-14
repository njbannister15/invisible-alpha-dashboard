import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/Root';

import configureMockStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureMockStore(middlewares)

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = mockStore({})

  ReactDOM.render(
    <Root store={store}/>, div);
});