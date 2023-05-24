import React from 'react';
import { createTheme } from '@mui/material';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    subtitle: React.CSSProperties;
    label: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    subtitle: true;
    label: true;
  }
}

const theme = createTheme({
  palette,
  typography,
  components,
  spacing: 4,
});

export default theme;
