import { BorderWidth, Colors, ComponentStyles } from "@/constants/design-system";
import { Button, type ButtonProps } from "@rneui/themed";
import { StyleSheet, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "error" | "info";
export type ButtonType = "solid" | "outline" | "clear";

interface CommonButtonProps extends Omit<ButtonProps, "type"> {
  title: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
  buttonType?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
}

export const CommonButton = ({
  title,
  fullWidth = true,
  variant = "primary",
  buttonType = "solid",
  loading = false,
  disabled = false,
  buttonStyle,
  titleStyle,
  disabledStyle,
  disabledTitleStyle,
  loadingProps,
  ...props
}: CommonButtonProps) => {
  const buttonColors = Colors.button[variant];
  const isOutline = buttonType === "outline";
  const isClear = buttonType === "clear";

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      ...ComponentStyles.button.base,
    };

    if (isOutline) {
      return {
        ...baseStyle,
        backgroundColor: "transparent",
        borderWidth: BorderWidth.buttonOutline,
        borderColor: buttonColors.outline,
      };
    }

    if (isClear) {
      return {
        ...baseStyle,
        backgroundColor: "transparent",
      };
    }

    return {
      ...baseStyle,
      backgroundColor: buttonColors.solid,
    };
  };

  const getTitleStyle = () => {
    const baseStyle = {
      ...ComponentStyles.button.title,
    };

    if (isOutline || isClear) {
      return {
        ...baseStyle,
        color: buttonColors.outline,
      };
    }

    return {
      ...baseStyle,
      color: buttonColors.text,
    };
  };

  return (
    <Button
      title={title}
      type={buttonType}
      buttonStyle={[
        styles.button,
        getButtonStyle(),
        fullWidth && styles.fullWidth,
        buttonStyle,
      ]}
      titleStyle={[getTitleStyle(), titleStyle]}
      disabled={disabled || loading}
      disabledStyle={[
        ComponentStyles.button.disabled,
        isOutline && { borderColor: Colors.button.disabled.border },
        disabledStyle,
      ]}
      disabledTitleStyle={[
        ComponentStyles.button.disabledTitle,
        disabledTitleStyle,
      ]}
      loading={loading}
      loadingProps={{
        color: isOutline || isClear ? buttonColors.outline : buttonColors.text,
        size: "small",
        ...loadingProps,
      }}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 0,
    shadowOpacity: 0,
  },
  fullWidth: {
    width: "100%",
  },
});