import React from 'react';
import Counter from '../components/Counter/Counter';
import AppStyles from './AppStyle';
function App() {
  const classes = AppStyles()
  return (
    <div className={classes.myPage}>
      <Counter />
    </div>
  );
}

export default App;
