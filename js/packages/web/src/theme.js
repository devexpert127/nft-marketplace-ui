import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    color: '#fff',
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },

  backgroundColor: '#010613',
});

export default theme;
