/**
 * Created by Admin on 12/4/2017.
 */
import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import FirstPage from './FirstPage/index'
import SecondPage from './SecondPage'

export default ()=>(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FirstPage}/>
            <Route path="/issuepage" component={SecondPage}/>
        </Switch>
        </BrowserRouter>
    );