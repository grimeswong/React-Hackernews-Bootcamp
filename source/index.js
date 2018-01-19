import React from 'react';
import ReactDOM from 'react-dom';

/* Pure javascript Syntax*/
// const element = React.createElement(
//   'div', // the type of element we're creating
//   null, // any props ('attributes') we're giving it
//   'Hello Hacker News' // The children of this element.
// );

/* JSX Syntax */
const element =
  <div>
  Hello Hacker News
  </div>

const myNum = React.createElement(
  'div',
  {dataTest: 10},
  'Hello Hacker News'
)

const root = document.getElementById('root');

ReactDOM.render(myNum, root);
