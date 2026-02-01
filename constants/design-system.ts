import { Dimensions, Platform } from 'react-native';

// ============================================
// RESPONSIVE BREAKPOINTS
// ============================================
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

export const isSmallDevice = SCREEN_WIDTH < Breakpoints.sm;
export const isMediumDevice = SCREEN_WIDTH >= Breakpoints.sm && SCREEN_WIDTH < Breakpoints.md;
export const isLargeDevice = SCREEN_WIDTH >= Breakpoints.md;

// Responsive helper functions
export const getResponsiveValue = <T,>(values: {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}): T => {
  if (SCREEN_WIDTH >= Breakpoints.xl && values.xl) return values.xl;
  if (SCREEN_WIDTH >= Breakpoints.lg && values.lg) return values.lg;
  if (SCREEN_WIDTH >= Breakpoints.md && values.md) return values.md;
  if (SCREEN_WIDTH >= Breakpoints.sm && values.sm) return values.sm;
  return values.xs as T;
};

// ============================================
// COLORS
// ============================================
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  // Base colors
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  // Semantic colors
  semantic: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    info: '#5AC8FA',
  },
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F8F8F8',
    gray100: '#F0F0F0',
    gray200: '#E5E5E5',
    gray300: '#E0E0E0',
    gray400: '#CCCCCC',
    gray500: '#999999',
    gray600: '#666666',
    gray700: '#333333',
    gray800: '#1A1A1A',
    gray900: '#111111',
  },
  // Input colors
  input: {
    background: '#F8F8F8',
    backgroundFocused: '#FFFFFF',
    backgroundDisabled: '#F0F0F0',
    backgroundError: '#FFF5F5',
    border: '#E0E0E0',
    borderFocused: '#007AFF',
    borderError: '#FF3B30',
    text: '#333333',
    textDisabled: '#999999',
    placeholder: '#999999',
    label: '#333333',
    error: '#FF3B30',
  },
  // Button colors by variant
  button: {
    primary: {
      solid: '#007AFF',
      outline: '#007AFF',
      clear: '#007AFF',
      text: '#FFFFFF',
    },
    secondary: {
      solid: '#5856D6',
      outline: '#5856D6',
      clear: '#5856D6',
      text: '#FFFFFF',
    },
    success: {
      solid: '#34C759',
      outline: '#34C759',
      clear: '#34C759',
      text: '#FFFFFF',
    },
    warning: {
      solid: '#FF9500',
      outline: '#FF9500',
      clear: '#FF9500',
      text: '#FFFFFF',
    },
    error: {
      solid: '#FF3B30',
      outline: '#FF3B30',
      clear: '#FF3B30',
      text: '#FFFFFF',
    },
    info: {
      solid: '#5AC8FA',
      outline: '#5AC8FA',
      clear: '#5AC8FA',
      text: '#FFFFFF',
    },
    disabled: {
      background: '#E5E5E5',
      border: '#CCCCCC',
      text: '#999999',
    },
  },
} as const;

// ============================================
// SPACING
// ============================================
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  // Component-specific spacing
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    minHeight: 50,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    iconMargin: 8,
  },
  screen: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  card: {
    padding: 16,
    marginBottom: 16,
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const Typography = {
  // Font families
  fontFamily: Platform.select({
    ios: {
      sans: 'system-ui',
      serif: 'ui-serif',
      rounded: 'ui-rounded',
      mono: 'ui-monospace',
    },
    default: {
      sans: 'normal',
      serif: 'serif',
      rounded: 'normal',
      mono: 'monospace',
    },
    web: {
      sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      serif: "Georgia, 'Times New Roman', serif",
      rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
      mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
  }),
  // Font sizes
  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    // Component-specific
    button: 16,
    input: 16,
    label: 14,
    error: 12,
    heading: {
      h1: 32,
      h2: 24,
      h3: 20,
      h4: 18,
      h5: 16,
      h6: 14,
    },
  },
  // Font weights
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const BorderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
  // Component-specific
  button: 12,
  input: 8,
  card: 12,
  badge: 16,
} as const;

// ============================================
// SHADOWS & ELEVATION
// ============================================
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },
} as const;

// ============================================
// ICON SIZES
// ============================================
export const IconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 48,
  // Component-specific
  input: 22,
  button: 20,
  tab: 24,
} as const;

// ============================================
// BORDER WIDTHS
// ============================================
export const BorderWidth = {
  none: 0,
  thin: 1,
  medium: 1.5,
  thick: 2,
  // Component-specific
  input: 1.5,
  inputFocused: 2,
  buttonOutline: 2,
} as const;

// ============================================
// OPACITY
// ============================================
export const Opacity = {
  transparent: 0,
  disabled: 0.6,
  hover: 0.8,
  pressed: 0.9,
  overlay: 0.5,
  full: 1,
} as const;

// ============================================
// COMPONENT STYLES (Pre-defined styles for components)
// ============================================
export const ComponentStyles = {
  button: {
    base: {
      borderRadius: BorderRadius.button,
      paddingVertical: Spacing.button.paddingVertical,
      paddingHorizontal: Spacing.button.paddingHorizontal,
      minHeight: Spacing.button.minHeight,
      elevation: 0,
      shadowOpacity: 0,
    },
    disabled: {
      backgroundColor: Colors.button.disabled.background,
      opacity: Opacity.disabled,
    },
    title: {
      fontSize: Typography.fontSize.button,
      fontWeight: Typography.fontWeight.semibold,
    },
    disabledTitle: {
      color: Colors.button.disabled.text,
    },
  },
  input: {
    container: {
      paddingHorizontal: 0,
      marginBottom: Spacing.input.marginBottom,
    },
    inputContainer: {
      borderBottomWidth: BorderWidth.input,
      borderColor: Colors.input.border,
      paddingHorizontal: Spacing.input.paddingHorizontal,
      paddingVertical: Spacing.input.paddingVertical,
      borderRadius: BorderRadius.input,
      backgroundColor: Colors.input.background,
    },
    inputContainerFocused: {
      borderColor: Colors.input.borderFocused,
      backgroundColor: Colors.input.backgroundFocused,
      borderWidth: BorderWidth.inputFocused,
      borderBottomWidth: BorderWidth.inputFocused,
    },
    inputContainerError: {
      borderColor: Colors.input.borderError,
      backgroundColor: Colors.input.backgroundError,
    },
    inputContainerDisabled: {
      backgroundColor: Colors.input.backgroundDisabled,
      opacity: Opacity.disabled,
    },
    input: {
      fontSize: Typography.fontSize.input,
      color: Colors.input.text,
      paddingHorizontal: Spacing.sm,
    },
    inputDisabled: {
      color: Colors.input.textDisabled,
    },
    label: {
      fontSize: Typography.fontSize.label,
      fontWeight: Typography.fontWeight.semibold,
      color: Colors.input.label,
      marginBottom: Spacing.sm,
    },
    error: {
      fontSize: Typography.fontSize.error,
      color: Colors.input.error,
      marginTop: Spacing.xs,
      marginLeft: Spacing.xs,
    },
    iconContainer: {
      marginHorizontal: Spacing.input.iconMargin,
    },
  },
} as const;

// ============================================
// Z-INDEX
// ============================================
export const ZIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================
// ANIMATION DURATIONS
// ============================================
export const Animation = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// ============================================
// EXPORT ALL
// ============================================
export const DesignSystem = {
  Colors,
  Spacing,
  Typography,
  BorderRadius,
  Shadows,
  IconSizes,
  BorderWidth,
  Opacity,
  ComponentStyles,
  ZIndex,
  Animation,
  Breakpoints,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  getResponsiveValue,
} as const;