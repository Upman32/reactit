import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'



let MapStatetoPropsforRedirect = (state) => ({
    isAuth: state.auth.isAuth})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(MapStatetoPropsforRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}