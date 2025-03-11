/**
 * Custom ToggleGroupControl component
 * Extends the WordPress ToggleGroupControl with custom styling
 */
import { ToggleGroupControl, ToggleGroupControlOption } from '@wordpress/components';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Custom styled ToggleGroupControl component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Styled ToggleGroupControl component
 */
const CustomToggleGroupControl = (props) => {
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
    toggleGroup: {
      border: `${theme.borders.width.thin} solid ${theme.colors.lightGray}`,
      borderRadius: theme.borders.radius.medium,
      overflow: 'hidden',
    },
    option: {
      backgroundColor: theme.colors.white,
      color: theme.colors.darkGray,
      border: 'none',
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      transition: theme.transitions.fast,
      '&:hover': {
        backgroundColor: theme.colors.offWhite,
      },
    },
    activeOption: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      '&:hover': {
        backgroundColor: theme.colors.primaryDark,
      },
    },
    help: {
      color: theme.colors.mediumGray,
      fontSize: theme.typography.fontSizes.small,
      marginTop: theme.spacing.xxs,
    },
  };

  // Render custom ToggleGroupControlOption components with our styling
  const renderOptions = () => {
    if (!props.options || !Array.isArray(props.options)) {
      return null;
    }

    return props.options.map((option) => (
      <ToggleGroupControlOption
        key={option.value}
        value={option.value}
        label={option.label}
        aria-label={option['aria-label'] || option.label}
        style={{
          ...customStyles.option,
          ...(props.value === option.value ? customStyles.activeOption : {}),
        }}
      />
    ));
  };

  return (
    <div style={customStyles.wrapper}>
      {props.label && <label style={customStyles.label}>{props.label}</label>}
      <ToggleGroupControl
        {...props}
        __nextHasNoMarginBottom={true}
        style={customStyles.toggleGroup}
      >
        {renderOptions()}
      </ToggleGroupControl>
      {props.help && <p style={customStyles.help}>{props.help}</p>}
    </div>
  );
};

export default CustomToggleGroupControl;