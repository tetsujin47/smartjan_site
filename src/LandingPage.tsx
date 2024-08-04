import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppAppBar from './components/AppAppBar';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';
import Welcome from 'components/Welcome';
import Features from 'components/Features';
// import HowToUse from 'components/HowToUse';
// import News from 'components/News';

export default function LandingPage() {
  const [mode, ] = React.useState<PaletteMode>('light');
  const [showCustomTheme, ] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar/>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Welcome />
        <Divider />
        <Features />
        <Divider />
        {/* <HowToUse />
        <Divider /> */}
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        {/* <News /> */}
        <Divider />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
