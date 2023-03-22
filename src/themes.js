import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d3d6dc",
          200: "#a7aeba",
          300: "#7c8597",
          400: "#1F2A40",
          500: "#243452",
          600: "#1d2a42",
          700: "#161f31",
          800: "#0e1521",
          900: "#070a10",
        },
        secondary: {
          100: "#ebddd8",
          200: "#d8bbb1",
          300: "#c49889",
          400: "#b17662",
          500: "#9d543b",
          600: "#7e432f",
          700: "#5e3223",
          800: "#3f2218",
          900: "#1f110c",
        },
        green: {
          100: "#e2eeda",
          200: "#c6deb5",
          300: "#a9cd91",
          400: "#8dbd6c",
          500: "#70ac47",
          600: "#5a8a39",
          700: "#43672b",
          800: "#2d451c",
          900: "#16220e",
        },

        redAccent: {
          100: "#eed5d7",
          200: "#dcaaaf",
          300: "#cb8087",
          400: "#b9555f",
          500: "#a82b37",
          600: "#86222c",
          700: "#651a21",
          800: "#431116",
          900: "#22090b",
        },
        grayAccent: {
          100: "#f6f6f6",
          200: "#ededed",
          300: "#e5e5e5",
          400: "#dcdcdc",
          500: "#d3d3d3",
          600: "#a9a9a9",
          700: "#7f7f7f",
          800: "#545454",
          900: "#2a2a2a",
        },
      }
    : {
        primary: {
          100: "#070a10",
          200: "#0e1521",
          300: "#161f31",
          400: "#1d2a42",
          500: "#d3d3d3",
          600: "#505d75",
          700: "#7c8597",
          800: "#a7aeba",
          900: "#d3d6dc",
        },
        secondary: {
          100: "#1f110c",
          200: "#3f2218",
          300: "#5e3223",
          400: "#7e432f",
          500: "#9d543b",
          600: "#b17662",
          700: "#c49889",
          800: "#d8bbb1",
          900: "#ebddd8",
        },
        green: {
          100: "#16220e",
          200: "#2d451c",
          300: "#43672b",
          400: "#5a8a39",
          500: "#70ac47",
          600: "#8dbd6c",
          700: "#a9cd91",
          800: "#c6deb5",
          900: "#e2eeda",
        },
        redAccent: {
          100: "#22090b",
          200: "#431116",
          300: "#651a21",
          400: "#86222c",
          500: "#a82b37",
          600: "#b9555f",
          700: "#cb8087",
          800: "#dcaaaf",
          900: "#eed5d7",
        },
        grayAccent: {
          100: "#2a2a2a",
          200: "#545454",
          300: "#7f7f7f",
          400: "#a9a9a9",
          500: "#d3d3d3",
          600: "#dcdcdc",
          700: "#e5e5e5",
          800: "#ededed",
          900: "#f6f6f6",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grayAccent[700],
              main: colors.grayAccent[500],
              light: colors.grayAccent[100],
            },
            background: {
              default: colors.primary[800],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.green[500],
            },
            neutral: {
              dark: colors.grayAccent[700],
              main: colors.grayAccent[500],
              light: colors.grayAccent[100],
            },
            background: {
              default: "#f0f0f0",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
