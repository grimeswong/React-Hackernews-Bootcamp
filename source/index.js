import React from 'react';
import ReactDOM from 'react-dom';

/* Pure javascript Syntax*/
// const element = React.createElement(
//   'div', // the type of element we're creating
//   null, // any props ('attributes') we're giving it
//   'Hello Hacker News' // The children of this element.
// );

const title = 'Hello Hacker News';
const element =
  <div
    style={{ fontSize: 36, color: 'green' }}
    onClick={() => window.alert(title)}
  >
    {title}
  </div>

const root = document.getElementById('root');

ReactDOM.render(element, root);
