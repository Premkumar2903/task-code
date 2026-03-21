
// ThemeProvider in MUI is used to apply a custom design theme (colors, typography, spacing) to your whole React app.

// It allows you to change MUI defaults globally—so your buttons, cards, textfields, etc. all follow your custom style.


import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: {default : '#0df8e0'}   // setting theme for whole layout
  },
});

export default theme;