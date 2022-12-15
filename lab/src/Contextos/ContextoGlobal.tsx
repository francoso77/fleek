import { createContext } from "react";
import { GlobalStateInterface } from "../Interfaces/GlobalStateInterface";

export const ContextoGlobal = createContext<GlobalStateInterface | null>(null)


