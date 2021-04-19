import React from 'react';
import './less/App.less';
import './scss/tailwind.scss';
import 'antd/dist/antd.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div id='app'>
      <span>hello world</span>
    </div>
  );
};

export default App;
