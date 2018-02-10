import React from 'react';
import { Redirect } from 'react-router-dom';
import  LoadingContainer from '../common-components/loading-container';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class NewsDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading_state: true,
      articles: []
    }
  }
  componentWillMount(){
    if(this.props.location.state){
      fetch(`https://newsapi.org/v1/articles?source=${this.props.location.state.detail}&sortBy=top&apiKey=d1cfbf5cf1e74757a5fad5cc65fd17eb`)
      .then(res => res.json())
      .then(data => {
        this.setState({articles: data.articles, loading_state: false});
      }).catch((err) => {
        console.log(err);
      });
    }else{
      this.props.history.push({
          pathname: '/feed'
        });
    }
  }
  render(){
    return(<div>
      { this.state.loading_state
        ?<LoadingContainer/>
        :  <div className="news-container">
            {this.state.articles.map((article, index) => {
              return  <Card
                className='news-item'>
                        <CardHeader
                          title={article.author}
                          subtitle={article.publishedAt}
                          avatar={article.urlToImage}
                        />
                        <CardMedia>
                          <img src={article.urlToImage} alt="" />
                        </CardMedia>
                        <CardTitle title={article.title} subtitle={article.publishedAt} />
                        <CardText>{article.description}</CardText>
                        <CardActions>
                          <FlatButton label="View Full News" />
                          <FlatButton label="Visit SIte" />
                        </CardActions>
                      </Card>
            })}
          </div>
      }
</div>
    );
  }
}

export default NewsDetail;