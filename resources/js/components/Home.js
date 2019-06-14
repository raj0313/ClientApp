import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount () {
    axios.get('/api/projects').then(response => {
      this.setState({
        projects: response.data
      })
    })
  }

  render () {
    const { projects } = this.state
    return (           
        <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div> 
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>

            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                        <a href="#" className="btn btn-primary">Know More</a>
                    </div>
                </div>      
            </div>
        </div> 
        
    </div> 
   
    )
  }
}

export default Home