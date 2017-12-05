/**
 * Created by Admin on 12/4/2017.
 */
import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
export default class FirstPage extends Component{
    render(){
        return(
            <div>
                <Link to="/">FirstPage</Link>
                <Link to="/issuepage">SecondPage</Link>
                 <h1>First Page Compopnet</h1>
            </div>
        );
    }
}