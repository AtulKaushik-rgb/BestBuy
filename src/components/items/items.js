import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Body from '../body/body'
import Phones from '../phones/phones'
import Clothes from '../clothes/clothes'
import Books from '../books/books'
import Search from '../search/search'
import Electronics from '../electronics/electronics'
import Sports from '../sports/sports'
import Furniture from '../furniture/furniture'

const items = () => {
    return (
        <div>
        <Switch>
        <Route exact  path='/' //status={status}
       component = {Body} 
        ></Route>
        <Route exact path='/clothes'component={Clothes}></Route>
        <Route exact path='/phones'component={Phones}></Route>
        <Route exact path='/books'component={Books}></Route>
        <Route exact path='/electronics'component={Electronics}></Route>
        <Route exact path='/sports'component={Sports}></Route>
        <Route exact path='/search'component={Search}></Route>
        <Route exact path='/furniture'component={Furniture}></Route>
        </Switch>
        </div>
    )
}

export default items
