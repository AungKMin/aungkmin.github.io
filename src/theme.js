import { createTheme } from '@mui/material/styles';

// Restores the Material-UI v4 defaults that MUI v9 changed, so component
// sizing and colors render exactly as they did before the upgrade:
//   - v4 breakpoint values (v9 uses md 900 / lg 1200 / xl 1536)
//   - text.secondary at 0.54 opacity (v9 uses 0.6)
//   - background.default of #fafafa, which CssBaseline puts on the body (v9 uses #fff)
//   - body2 typography on the body, which v4's CssBaseline set (v9 uses body1); the
//     taller body1 line-height otherwise pushes the whole drawer down by ~1px
//   - IconButton padding of 12px (v9 uses 8px)
// Note that v4's breakpoints.down(key) meant "below the next breakpoint", so
// every down() call site is one key higher than it was before the upgrade.
const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
  palette: {
    text: { secondary: 'rgba(0, 0, 0, 0.54)' },
    background: { default: '#fafafa' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: { ...themeParam.typography.body2 },
      }),
    },
    // v4's Chip set no line-height and inherited body2's 1.43; v9 hardcodes 1.5,
    // which shifts every chip label by half a pixel.
    MuiChip: { styleOverrides: { root: { lineHeight: 1.43 } } },
    MuiIconButton: { styleOverrides: { root: { padding: 12 } } },
  },
});

export default theme;
