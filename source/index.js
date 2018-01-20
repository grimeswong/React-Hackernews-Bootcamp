import React from 'react';
import ReactDOM from 'react-dom';

/* Pure javascript Syntax*/
// const element = React.createElement(
//   'div', // the type of element we're creating
//   null, // any props ('attributes') we're giving it
//   'Hello Hacker News' // The children of this element.
// );

const title = 'Hello Hacker News';

/* JSX syntax  */
function Element() {  // components that start with a lower letter have their name converted into a string (when compiled)
  return (
    <div
      style={{ fontSize: 36, color: 'green' }}
      onClick={() => window.alert(title)}
    >
      {title}
    </div>
  );
}

/* Pure JS syntax */
// const element = React.createElement (
//   'div',
//   { style: {fontSize: 36, color: 'green'},
//     onClick: () => {return window.alert(title)}
//   },
//   title
// );

const element = <Element />

const root = document.getElementById('root');

ReactDOM.render(element, root);
