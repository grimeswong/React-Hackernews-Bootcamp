// Path: source/Component/Article/index.jsx
import React from 'react';

export default function Article(props) {  // components that start with a lower letter have their name converted into a string (when compiled)
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </div>
  );
}
