import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectList';
import NewProject from './NewProject'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={ProjectsList}></Route>
                        <Route exact path='/create' component={NewProject}></Route>
                   </Switch>
                </div>
            
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'))