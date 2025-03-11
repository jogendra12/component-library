/**
 * Custom RangeControl component
 * Extends the WordPress RangeControl with custom styling
 */
import { RangeControl } from '@wordpress/components';
import { useTheme } from '../theme/ThemeProvider';

/**
 * Custom styled RangeControl component
 *
 * @param {Object} props Component props
 * @return {JSX.Element} Styled RangeControl component
 */
const CustomRangeControl = (props) => {
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
    rangeControl: {
      '--wp-components-color-accent': theme.colors.primary,
      '--wp-components-range-track-height': '4px',
      '--wp-components-range-thumb-size': '16px',
    },
    help: {
      color: theme.colors.mediumGray,
      fontSize: theme.typography.fontSizes.small,
      marginTop: theme.spacing.xxs,
    },
    beforeAfterIcons: {
      color: theme.colors.darkGray,
    },
    resetButton: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSizes.small,
      '&:hover': {
        color: theme.colors.primaryDark,
      },
    },
  };

  return (
    <div style={customStyles.wrapper}>
      {props.label && <label style={customStyles.label}>{props.label}</label>}
      <div style={customStyles.rangeControl}>
        <RangeControl
          {...props}
          __nextHasNoMarginBottom={true}
          beforeIcon={props.beforeIcon ? (
            <span style={customStyles.beforeAfterIcons}>{props.beforeIcon}</span>
          ) : undefined}
          afterIcon={props.afterIcon ? (
            <span style={customStyles.beforeAfterIcons}>{props.afterIcon}</span>
          ) : undefined}
          allowReset={props.allowReset !== undefined ? props.allowReset : true}
          resetFallbackValue={props.resetFallbackValue}
        />
      </div>
      {props.help && <p style={customStyles.help}>{props.help}</p>}
    </div>
  );
};

export default CustomRangeControl;