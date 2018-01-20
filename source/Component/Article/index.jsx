// Path: source/Component/Article/index.jsx
import React from 'react';
import styles from './styles.css';  // import css file from the style sheet from the same level

export default function Article(props) {  // components that start with a lower letter have their name converted into a string (when compiled)
  return (
    <div>
      <h2 className={styles.title}>Title: {props.title}</h2>
      <p className={styles.description}>{props.description}
        <a className={styles.link}href={props.link}> {props.link}</a>
      </p>
    </div>
  );
}
