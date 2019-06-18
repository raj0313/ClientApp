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
              <div class="row pt-20">
              Limousine Hire Auckland and Chauffeur Driven Services
              Limousine hire Auckland for all occasions, limo for hire, wedding limos, school ball limos, airport transfer, birthday limos, hens limo, Auckland limos, hummer for hire, hummer limos, limousine service, wedding car hire, luxury limos, bridle cars.
              Excellent Limousines aims to provide a high quality limousine services for all types of journeys. Weather is it a limousine hire or hummer hire. Our chauffeurs have been transferring clients in our limousines for many years. In this time we have gained a good reputation for courteous and efficient limousine transportation services. A loyal following of regular customers has been the result of our conscientious approach to customer satisfaction. With their support, this has been the foundation in building a solid business, in which we take great pride.
           
              </div>
              Services:
                    <div class="row">
                   
                        <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                       
                    </div>
                </div>      
            </div> 
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                     
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                       
                    </div>
                </div>      
            </div>
            <div class="col-sm-3">
                        <div className = "card" >
                    <img className = "card-img-top" src = "https://homepages.cae.wisc.edu/~ece533/images/watch.png" alt = "Card Image"></img>
                    <div className="card-body">
                        <h5 className="card-title">Wedding Limo</h5>
                        <p className="card-text">Arrive in style on this very important day in a luxurious stretch limo. All drivers have experience with wedding events and understand the importance of your special day!.</p>
                       
                    </div>
                </div>      
            </div>
          
          
        </div> 
        
    </div> 
   
    )
  }
}

export default Home