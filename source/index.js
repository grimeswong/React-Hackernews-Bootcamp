import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import Newsfeed from './View/Newsfeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: []};  // for avioding the error when render nothing
    this.state.loaded = false;
  }

  componentWillMount() {
    getArticles().then(articles => {
      this.setState({
        articles,
        loaded: true
       })
    });

  }

  render() {
    if(!this.state.loaded) {
      console.log("loading");
      return(<div>Loading...</div>)
    }

    return(
      <Newsfeed
        articles = {this.state.articles}
      />
    )
  }
}

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


const root = document.getElementById('root');

ReactDOM.render(<Container/>, root);
