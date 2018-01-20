import React from 'react';
import Article from '../Article';

export default function Newsfeed(props) {
  console.log('Debugger',props);
  const articles = props.articles.map(article => (
    <Article
      title={article.title}
      description={article.description}
      link = {article.link}
      key={article.id}
    />
  ));

  return (
    <div>{articles}</div>
  );
}
