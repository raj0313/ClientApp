import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectList';
import NewProject from './NewProject'
import Footer from './Footer'
import Home from './Home'
import Gallery from './Gallery'

class App extends Component{
    render(){
        return(
           
            <BrowserRouter>
                 <Header/>
                    <Switch>
                        <Route exact path='/' component={ProjectsList}></Route>
                        <Route exact path='/create' component={NewProject}></Route>
                        <Route exact path='/create' component={NewProject}></Route>
                   </Switch>
                    <Home/>
                   <Gallery/>
                 <Footer/>
              
            </BrowserRouter>
         
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))