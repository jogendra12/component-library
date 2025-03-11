/**
 * Custom FontSizePicker component
 * Extends the WordPress FontSizePicker with custom styling
 */
import { FontSizePicker } from '@wordpress/components';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Custom styled FontSizePicker component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Styled FontSizePicker component
 */
const CustomFontSizePicker = (props) => {
  const theme = useTheme();
  
  // Custom styles for the component
  const customStyles = {
    wrapper: {
      fontFamily: theme.typography.fontFamily,
    },
    label: {
      color: theme.colors.black,
      fontWeight: theme.typography.fontWeights.semiBold,
      marginBottom: theme.spacing.xs,
    },
    input: {
      borderRadius: theme.borders.radius.medium,
      borderColor: theme.colors.lightGray,
      padding: theme.spacing.sm,
      '&:focus': {
        borderColor: theme.colors.primary,
        boxShadow: theme.shadows.focus,
      },
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      borderRadius: theme.borders.radius.medium,
      transition: theme.transitions.fast,
      '&:hover': {
        backgroundColor: theme.colors.primaryDark,
      },
    },
  };

  // Custom font sizes that match our design system
  const customFontSizes = props.fontSizes || [
    {
      name: 'Small',
      slug: 'small',
      size: theme.typography.fontSizes.small,
    },
    {
      name: 'Normal',
      slug: 'normal',
      size: theme.typography.fontSizes.medium,
    },
    {
      name: 'Large',
      slug: 'large',
      size: theme.typography.fontSizes.large,
    },
    {
      name: 'Extra Large',
      slug: 'xlarge',
      size: theme.typography.fontSizes.xlarge,
    },
  ];

  return (
    <div style={customStyles.wrapper}>
      {props.label && <label style={customStyles.label}>{props.label}</label>}
      <FontSizePicker
        {...props}
        fontSizes={customFontSizes}
        // Apply custom class names for styling
        __nextHasNoMarginBottom={true}
      />
    </div>
  );
};

export default CustomFontSizePicker;