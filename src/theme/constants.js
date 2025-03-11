/**
 * Design system constants
 * These values define the visual language of the custom components
 */

// Color palette
export const COLORS = {
  // Primary colors
  primary: '#2385b6',
  primaryDark: '#1e87f0',
  primaryLight: '#4dabf5',
  
  // Secondary colors
  secondary: '#86b971',
  secondaryDark: '#2d7f0b',
  secondaryLight: '#dee8c2',
  
  // Neutrals
  black: '#1f1d42',
  darkGray: '#4a4a4a',
  mediumGray: '#757575',
  lightGray: '#e0e0e0',
  offWhite: '#f0f8e1',
  white: '#ffffff',
  
  // Feedback colors
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: '"Fira Sans", sans-serif',
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 800,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
};

// Spacing
export const SPACING = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

// Borders
export const BORDERS = {
  radius: {
    small: '4px',
    medium: '8px',
    large: '20px',
    round: '50%',
  },
  width: {
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },
};

// Shadows
export const SHADOWS = {
  small: '0 2px 4px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.12)',
  large: '0 8px 16px rgba(0, 0, 0, 0.14)',
  focus: '0 0 0 2px rgba(35, 133, 182, 0.4)',
};

// Transitions
export const TRANSITIONS = {
  fast: '0.2s ease',
  medium: '0.3s cubic-bezier(0.77, 0, 0.175, 1)',
  slow: '0.5s cubic-bezier(0.77, 0, 0.175, 1)',
};

// Z-index values
export const Z_INDEX = {
  base: 1,
  dropdown: 10,
  modal: 100,
  tooltip: 500,
};