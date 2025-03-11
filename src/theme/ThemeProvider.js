/**
 * ThemeProvider component
 * Provides theme context to all child components
 */
import { createContext, useContext } from '@wordpress/element';
import { COLORS, TYPOGRAPHY, SPACING, BORDERS, SHADOWS, TRANSITIONS, Z_INDEX } from './constants';

// Create theme context
const ThemeContext = createContext();

// Theme object that combines all design system constants
const theme = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borders: BORDERS,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
  zIndex: Z_INDEX,
};

/**
 * Theme Provider component
 * Wraps components with the theme context
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Themed component
 */
const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to access theme values
 * 
 * @return {Object} Theme object
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;