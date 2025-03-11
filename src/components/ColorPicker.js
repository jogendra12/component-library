/**
 * Custom ColorPicker component
 * Extends the WordPress ColorPicker with custom styling
 */
import { ColorPicker } from '@wordpress/components';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Custom styled ColorPicker component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Styled ColorPicker component
 */
const CustomColorPicker = (props) => {
  const theme = useTheme();
  
  // Custom styles for the component
  const customStyles = {
    wrapper: {
      fontFamily: theme.typography.fontFamily,
      marginBottom: theme.spacing.md,
    },
    label: {
      color: theme.colors.black,
      fontWeight: theme.typography.fontWeights.semiBold,
      marginBottom: theme.spacing.xs,
      display: 'block',
    },
    colorPicker: {
      border: `${theme.borders.width.thin} solid ${theme.colors.lightGray}`,
      borderRadius: theme.borders.radius.medium,
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.white,
    },
    swatch: {
      borderRadius: theme.borders.radius.small,
      border: `${theme.borders.width.thin} solid ${theme.colors.lightGray}`,
      boxShadow: theme.shadows.small,
    },
    help: {
      color: theme.colors.mediumGray,
      fontSize: theme.typography.fontSizes.small,
      marginTop: theme.spacing.xxs,
    },
  };

  return (
    <div style={customStyles.wrapper}>
      {props.label && <label style={customStyles.label}>{props.label}</label>}
      <div style={customStyles.colorPicker}>
        <ColorPicker
          {...props}
          disableAlpha={props.disableAlpha !== undefined ? props.disableAlpha : false}
        />
      </div>
      {props.help && <p style={customStyles.help}>{props.help}</p>}
    </div>
  );
};

export default CustomColorPicker;