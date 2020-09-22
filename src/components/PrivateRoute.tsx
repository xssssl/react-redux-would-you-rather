import React, { useRef, ReactNode, FunctionComponent, MutableRefObject } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { RootState } from '../types/RootState'

interface PrivateRouteProps {
  isAuthenticated: boolean,
  defaultHomePath: string,
  authPath: string,
  children?: ReactNode
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = (props) => {
  const { 
    isAuthenticated, 
    defaultHomePath, 
    authPath, 
    children, 
    ...rest 
  } = props

  const location = useLocation()
  const fromPath: MutableRefObject<string> = useRef(location.pathname)

  return (
    <Route {...rest}>
      {isAuthenticated 
        ? <>
            <Redirect to={fromPath.current || defaultHomePath} />  
            {children}
          </>
        : <Redirect to={authPath}
          />}
    </Route>
  )
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.userAuth.isAuthenticated
})

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default ConnectedPrivateRoute