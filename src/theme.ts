import createTheme from "@mui/material/styles/createTheme";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        mobile: true;
    }
}


export enum Colors {
    '--light-cyan' = 'rgba(0,199,255,255)',
    '--light-blue' = '#0057bb',
    '--dark-blue-1' = 'rgba(0, 10, 31, 255)',
    '--dark-blue-2' = 'rgb(23, 32, 51)',
}

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: Colors["--light-cyan"],
        },
        background: {
            default: Colors["--dark-blue-1"],
        },
    },

    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: Colors["--light-cyan"],
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors["--dark-blue-1"]
                }
            },
        },

    },

    breakpoints: {
        values: {
            mobile: 470,
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: Colors["--light-blue"],
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: Colors["--dark-blue-2"]
                }
            },
        },

        MuiLink: {
            styleOverrides: {
                root: {
                    color: Colors["--light-cyan"],
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: Colors["--light-blue"],
                },
            },
        },
    },

    breakpoints: {
        values: {
            mobile: 470,
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    }

});
