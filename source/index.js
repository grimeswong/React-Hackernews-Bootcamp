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
      <a href={props.link}>{props.link}</a>
    </div>
  );
}

// Fake message
const message = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const article =
<div>
  <Article
    title="Hello Hacker News"
    description= {message}
    link="https://news.ycombinator.com/item?id=15806500"
  />
  <Article
    title="Tech News"
    description={message}
    link="http://www.couriermail.com.au/technology?nk=e807bdccff5d537cd751655ae3756ef5-1516408216"
  />
  <Article
    title="Yahoo News"
    description={message}
    link="http://yahoo.com.au"
  />
</div>


const root = document.getElementById('root');

ReactDOM.render(article, root);
