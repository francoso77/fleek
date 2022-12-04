import { LayoutStateInterface } from "./LayoutStateInterface";
import { LoginStateInterface } from "./LoginStateInterface";
import { MensagemModalStateInterface } from "./MensagemModalStateInterface";
import { TemProdutosInterface } from "./TemProdutosInterface";

export interface ContextoGlobalInterface {
    loginState: LoginStateInterface
    setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
    layoutState: LayoutStateInterface
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutStateInterface>>
    mensagemModalState: MensagemModalStateInterface
    setMensagemModalState: React.Dispatch<React.SetStateAction<MensagemModalStateInterface>>
    temProdutosState: TemProdutosInterface
    setTemProdutosState: React.Dispatch<React.SetStateAction<TemProdutosInterface>>
}