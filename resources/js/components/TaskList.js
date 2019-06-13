import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TaskList extends React.Component{
    constructor(){
        super()
        this.state  ={
            tasks : []
        }
    }

    componentDidMount(){
        axios.get('/api/tasks')
    }
}