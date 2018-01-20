import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Component/Article/'



const LOREM_IPSUM =
  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book.`

const ARTICLES = [
  {
    description: LOREM_IPSUM,
    id: 1,
    link: 'https://google.com',
    title: 'Article 1',
  },
  {
    description: LOREM_IPSUM,
    id: 2,
    link: 'https://google.com',
    title: 'Article 2',
  },
  {
    description: LOREM_IPSUM,
    id: 3,
    link: 'https://google.com',
    title: 'Article 3',
  },
]

const Views =
  <div>
    <Article article={ARTICLES[0]} /> 
    <Article article={ARTICLES[1]} />
    <Article article={ARTICLES[2]} />
  </div>


const root = document.getElementById('root');

ReactDOM.render(Views, root);
