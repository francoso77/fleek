
import { createTheme } from "@mui/material";

export const THEME = createTheme({
    menu: {
        corIcone: '#de8e1f',
        tamanhoIcone: 40
    },
    palette: {
        primary: {
            main: '#de8e1f'
        },
        secondary: {
            main: '#f2f0ed'
        }
    }
})

declare module '@mui/material/styles' {
    interface Theme{
        menu:{
            corIcone: string;
            tamanhoIcone: number;
        };
    }

    interface ThemeOptions {
        menu?:{
            corIcone?: string;
            tamanhoIcone?:number;
        };
    }
}

