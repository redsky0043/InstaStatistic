import React from 'react';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import './styles/_global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;