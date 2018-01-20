import React from 'react';
import ReactDOM from 'react-dom';

/* Pure javascript Syntax*/
// const element = React.createElement(
//   'div', // the type of element we're creating
//   null, // any props ('attributes') we're giving it
//   'Hello Hacker News' // The children of this element.
// );

// const title = 'Hello Hacker News';

/* Pure JS syntax */
// const element = React.createElement (
//   'div',
//   { style: {fontSize: 36, color: 'green'},
//     onClick: () => {return window.alert(title)}
//   },
//   title
// );


/* JSX syntax  */
function Article(props) {  // components that start with a lower letter have their name converted into a string (when compiled)
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Link</a>
    </div>
  );
}

const article =
  <Article
    title="Hello Hacker News"
    description="Bar Bar Bar"
    link="http://yahoo.com.au"
  />


const root = document.getElementById('root');

ReactDOM.render(article, root);
