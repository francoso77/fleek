import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Mensagem from "../Componentes/Mensagem";
import { THEME } from "../Config/Theme";
import { ContextoGlobal } from "../GlobalStates/ContextoGlobal";
import useLayoutState from "../GlobalStates/LayoutState";
import useLoginState from "../GlobalStates/LoginState";
import useMensagemState from "../GlobalStates/MensagemState";
import Login from "../View/Controller/Login";
import BottomBar from "./BottomBar";
import Condicional from "./Condicional";
import Menu from "./Menu";
import TopAppBar from "./TopAppBar";

export default function Layout() {

    const { layoutState, setLayoutState } = useLayoutState()
    const { loginState, setLoginState } = useLoginState()
    const { mensagemState, setMensagemState } = useMensagemState()

    return (
        <>
            <ContextoGlobal.Provider value={{
                layoutState: layoutState,
                setLayoutState: setLayoutState,
                loginState: loginState,
                setLoginState: setLoginState,
                mensagemState: mensagemState,
                setMensagemState: setMensagemState
            }}>
                <CssBaseline />
                <ThemeProvider theme={THEME}>
                    <Mensagem />

                    <Condicional condicao={loginState.logado}>
                        
                        <TopAppBar />
                        <Outlet />
                        <BottomBar />
                        <Menu />

                    </Condicional>
                    <Condicional condicao={!loginState.logado}>
                        
                        <Login />

                    </Condicional>

                </ThemeProvider>
            </ContextoGlobal.Provider>
        </>
    )
}