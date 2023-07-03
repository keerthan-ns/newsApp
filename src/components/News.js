import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 10,
        category: "general"
    }
    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalize = (string) =>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: false,
            page:1,
        }
        document.title = `NewsGorilla- ${this.capitalize(this.props.category)}`;
    }
    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e7ee060733dd4af19a1a658279c90e6f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles:parseData.articles,
            totalResults:parseData.totalResults,
            loading:false
        })
    }
    async componentDidMount(){
        this.updateNews();
    }
    handleNextClick=async()=>{
        this.setState({
            page:this.state.page+1
        })
        this.updateNews();
    }
    handlePrevClick=async()=>{
        this.setState({
            page:this.state.page-1
        })
        this.updateNews();
    }
  render() {
    return (
      <div className="container mt-20 mb-3 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">NewsGorilla - {this.capitalize(this.props.category)}</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <div className="my-4 mx-2 flex flex-wrap items-center justify-between">
            {/* !this.state.loading && this.state.articles.map((element,i)=>{ */}
            {
                this.state.articles.map((element,i)=>{
                    return <NewsItem key={i} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                })
            }
        </div>
        <div className='container flex justify-center'>
            <button disabled={this.state.page<=1} onClick={this.handlePrevClick} type="button" className={`${this.state.page<=1?"cursor-not-allowed dark:bg-gray-500 dark:hover:bg-gray-700":""} text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>&larr; Prev</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type="button" className={`${this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)?"cursor-not-allowed dark:bg-gray-500 dark:hover:bg-gray-700":""} text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
