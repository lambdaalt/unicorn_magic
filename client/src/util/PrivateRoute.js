import React from 'react'
import {Route} from 'react-router-dom'


const PrivaterRoute = ({component: Component, ...rest}) => {
    return ( <Route 
        {...rest}
        render = {() => {
            return  <Component /> 
        }}/>
    )
}

export default PrivaterRoute;