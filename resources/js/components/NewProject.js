import React,{Component} from 'react'
import {Link} from 'react'
import axios from 'axios'

class NewProject extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name :' ',
            description:'',
            errors :[]
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewProject = this.handleCreateNewProject.bind(this)
       // this.hasErrorFor = this.hasErrorFor.bind(this)
        //this.renderErrorFor = this.renderErrorFor.bind(this)

    }
    handleFieldChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleCreateNewProject(event){
           event.preventDefault()

           const{history} = this.props
           const project = {
               name: this.state.name,
               description: this.state.description
           }
           axios.post('/api/projects', project)
           .then(response=>{
               history.push('/')
           }).catch(error =>{
               this.setState({
                   errors: error.response.data.errors
               })
           })
    }

    render(){
        return(
            <div className='container py-4'>
               <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className ="card-header"> Create New Project </div>
                            <div className ="card-body">
                                <form onSubmit = {this.handleCreateNewProject}>
                                    <div className ="form-group">
                                        <label htmlFor="name">Project Name</label>
                                        <input 
                                        id= "name"
                                       className ={'form-control'}
                                        //class= {`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        value ={this.state.name}
                                        onChange={this.handleFieldChange}
                                        name = "name"
                                        />
                                    </div>
                                    <div className ="form-group">
                                        <label htmlFor="description">Project Description</label>
                                        <textarea 
                                        id= "description"
                                        className ={'form-control'}
                                        //class= {`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                        value ={this.state.description}
                                        onChange={this.handleFieldChange}
                                        name = "description"
                                        rows = '10'
                                        />
                                   </div>
                                   <button className='btn btn-primary'>Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
    
}
export default NewProject