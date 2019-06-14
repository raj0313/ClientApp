import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectList';
import NewProject from './NewProject'
import Footer from './Footer'
import Home from './Home'


class App extends Component{
    render(){
        return(
            <div style={{backgroundColor:"black"}}>
            <BrowserRouter>
                 <Header/>
                    <Switch>
                        <Route exact path='/' component={ProjectsList}></Route>
                        <Route exact path='/create' component={NewProject}></Route>
                   </Switch>
                   <Home/>
                 <Footer/>
              
            </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))