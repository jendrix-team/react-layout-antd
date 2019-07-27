import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import AppLayout from './layout/AppLayout';

class App extends React.Component {
  render() {
      return <AppLayout />
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
