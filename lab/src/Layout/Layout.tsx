import React from 'react'
import { Outlet } from 'react-router-dom'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import Login from '../Login/Login'
import useLayoutState from '../States/LayoutState'
import useLoginState from '../States/LoginState'
import Footer from './Footer'
import Header from './Header'
import './Layout.css'


export default function Layout() {

    const { loginState, setLoginState } = useLoginState()
    const { layoutState, setLayoutState } = useLayoutState()

    return (
        <>
            <ContextoGlobal.Provider value={{
                loginState: loginState,
                setLoginState: setLoginState,
                layoutState: layoutState,
                setLayoutState: setLayoutState
            }}>

                <>
                    {loginState.logado ?
                        <>
                            <Header />
                            <Outlet />
                            <Footer />
                        </> :
                        <>
                            <Login />
                        </>
                    }

                </>
            </ContextoGlobal.Provider>
        </>
    )
}