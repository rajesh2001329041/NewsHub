import React, { Component } from 'react'
import '../App.css';


export default class NewsItems extends Component {
    
       
        
    
  render() {
    let {source_id,title,descrption,url,urlToImage}=this.props;
    
    return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
        <div className="card ">
            <div className="card-header text-center bg-danger">
                 <strong  className='fs-5 text-warning '> {source_id}</strong>
            </div>

             <div className="card-body p-0 pb-2">
                <img src={urlToImage} className='img-fluid'  alt="" />
                <h4 className='mx-2 mt-1'>{title}</h4>

                <p className='fs-6 mx-2'>{descrption}....</p>
                <a href={url} className='btn btn-sm btn-dark mx-3'>Read More</a>
             </div>
        </div>
    </div>
    </>
    )
  }
}
