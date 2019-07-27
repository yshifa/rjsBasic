import React ,{Component} from "react";
import Header from "./Header";
import NewsListitem from "./NewsListitem";
 
const API_URL = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-27&sortBy=publishedAt&apiKey=09acdfa55a8e4ca2b37bcc5754232953";

class NewsPage extends Component {
    state = {
        articles:[]
    };
    componentDidMount() {
        fetch(API_URL)
        .then(data => data.json())
        .then(result => this.setState({articles:result.articles}))
        .catch(e => console.log(e));
    }
    
    render() { 
        //console.log("render articles state",
        //this.state.articles);

        let newsList = this.state.articles.map(article => (
            <NewsListitem
            newsDescription={article.description}
            newsTitle={article.title}
            author={article.author}
             thumbnail={article.urlToImage}
             />
        ));
        return (
            <div>
            <Header/>
            {newsList}
            </div>
          );
    }
}
 
export default NewsPage;