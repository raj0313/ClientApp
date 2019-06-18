import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      gallery_images: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
    this.setState({
        gallery_images:[
        {
         "url": "http://localhost:8000/img/limo_3.png",
         "category" :"Ford_limo"
        },
        {"url": "http://localhost:8000/img/limo_1.png",
        "category" :"Hummer_limo"
        },
        {
        "url": "http://localhost:8000/img/limousine.png", 
        "category" :"Other"
        },
        {
        "url": "http://localhost:8000/img/hummer.png",
        "category" :"Hummer_limo"
        },
        {
            "url": "http://localhost:8000/img/limo_3.png",
            "category" :"Hummer_limo"
            }
        ]
    })
}
  

  render () {
    console.log(this.state.gallery_images)
    return (           
        <div className="container w-50 h-100 ">
           
            {
                this.state.gallery_images.map((val,index)=>{
                     return(
            <div className = "row">
               <div className = "col">
               <img className = "img-fluid" src = {val.url} alt = "Card Image"></img>
                   <div className = "row">
                        <div className ="col">
                        <img className = "card-img-top" src = {val.url} alt = "Card Image"></img>
                        </div>
                        <div className ="col">
                        <img className = "card-img-top" src = {val.url} alt = "Card Image"></img>
                        </div>
                        <div className ="col">
                        <img className = "card-img-top" src = {val.url} alt = "Card Image"></img>
                        </div>
                   </div>
               </div>
               </div>
               )
                
            })
            }
           
            
        </div> 
   
    )
  }
}

export default Gallery