import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loader: true,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let data = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_493192219956be1e30d3d654393cce1062e78&country=in&image=1&language=en,or&category=${this.props.category}`
    );
    // this.setState({loader:true});
    let OriginalData = await data.json();

    console.log(OriginalData.nextPage);
    this.setState({
      articles: OriginalData.results,
      nextPage: OriginalData.nextPage,
      loader: false,
      totalResults: OriginalData.totalResults,
    });
  }
  // nextPageHandler = async () => {
  //   let data = await fetch(
  //     `https://newsdata.io/api/1/latest?apikey=pub_493192219956be1e30d3d654393cce1062e78&country=in&image=1&language=en,or&category=${this.props.category}&page=${this.state.nextPage}`
  //   ).catch(() => {
  //     console.log("something error");
  //   });
  //   this.setState({ loader: true });
  //   let OriginalData = await data.json();
  //   this.setState({
  //     articles: OriginalData.results,
  //     nextPage: OriginalData.nextPage,
  //     loader: false,
  //   });
  // };

  fetchMoreData = async () => {
    let data = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_49314f5e306bc50a06e57e1212d27cebcf934&country=in&image=1&language=en,or&category=${this.props.category}&page=${this.state.nextPage}`
    );
    // this.setState({loader:true});
    let OriginalData = await data.json();

    this.setState({
      articles: this.state.articles.concat(OriginalData.results),
      nextPage: OriginalData.nextPage,
     
      totalResults: OriginalData.totalResults,
    });
  };

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.length1 !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            
            <div className="row mt-3">
            <h2 className="text-center mt-3">Top HeadLines-{this.props.category.toUpperCase()}</h2>
              {this.state.articles.map((e) => {
                return (
                  <NewsItems
                    key={e.article_id}
                    source_id={e.source_id ? e.source_id : "The Times Of India"}
                    title={
                      e.title
                        ? e.title
                        : "arris vs Trump: First poll after Biden's exit shows majority agree with his decision to step down - Hindustan Times"
                    }
                    descrption={
                      e.description
                        ? e.description.slice(0, 90)
                        : "The guidelines call for immediate referral of children under 15 years of age who show symptoms to nearby health facilities."
                    }
                    url={
                      e.link
                        ? e.link
                        : "https://indianexpress.com/article/cities/mumbai/chandipura-virus-deaths-gujarat-maharashtra-health-dept-guidelines-9469222/"
                    }
                    urlToImage={
                      e.image_url
                        ? e.image_url
                        : "https://images.indianexpress.com/2024/07/chandipura.jpg"
                    }
                  />
                );
              })}
            </div>
            {/* <div className=" float-end  mb-4 mt-4">
              <button
                className="btn btn-sm btn-dark"
                onClick={this.nextPageHandler}
              >
                Next&rarr;
              </button>
            </div> */}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
