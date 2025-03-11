/**
 * Custom SelectControl component
 * Extends the WordPress SelectControl with custom styling
 */
import { SelectControl } from '@wordpress/components';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Custom styled SelectControl component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Styled SelectControl component
 */
const CustomSelectControl = (props) => {
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
    select: {
      width: '100%',
      borderRadius: theme.borders.radius.medium,
      borderColor: theme.colors.lightGray,
      padding: theme.spacing.sm,
      backgroundColor: theme.colors.white,
      color: theme.colors.darkGray,
      fontSize: theme.typography.fontSizes.medium,
      transition: theme.transitions.fast,
      '&:focus': {
        borderColor: theme.colors.primary,
        boxShadow: theme.shadows.focus,
        outline: 'none',
      },
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
      <SelectControl
        {...props}
        __nextHasNoMarginBottom={true}
        className="custom-select-control"
      />
      {props.help && <p style={customStyles.help}>{props.help}</p>}
    </div>
  );
};

export default CustomSelectControl;