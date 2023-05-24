import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined = {
  fontFamily: 'Montserrat',
  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: '56px',
    letterSpacing: 0,
  },
  h2: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: '48px',
    letterSpacing: 0,
  },
  h3: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: 0,
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: '32px',
    letterSpacing: 0,
  },
  h5: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: '22px',
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '30px',
    letterSpacing: 0,
  },
  label: {
    fontSize: 32,
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: 0,
  },
  body1: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: '32px',
    letterSpacing: 0,
  },
  body2: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: 0,
  },
  body3: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '18px',
    letterSpacing: 0,
  },
  button: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: 0,
    textTransform: 'initial',
  },
  caption: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '19px',
    letterSpacing: 0,
  },
};
