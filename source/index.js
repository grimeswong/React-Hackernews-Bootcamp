import React from 'react';
import ReactDOM from 'react-dom';

import Article from './Component/Article';

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
