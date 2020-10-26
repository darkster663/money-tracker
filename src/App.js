import React from 'react';

import Aux from './hoc/Auxiliary/Auxiliary';
import Layout from './hoc/Layout/Layout';
import Diary from './containers/Diary/Diary';

const App = props => {
  return (
    <Aux>
      <Layout>
        <Diary />
      </Layout>
    </Aux>
  );
}

export default App;
