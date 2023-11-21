import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MainTemplate } from './components/templates';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MainTemplate />
    </BrowserRouter>
  );
};

export default App;
