import React, { createContext } from "react";
import { ContextoGlobalInterface } from "../Interfaces/ContextoGlobalInterface";

export const ContextoGlobal = createContext<ContextoGlobalInterface | null>(null)

