import { Colors, ComponentStyles, IconSizes, Opacity } from "@/constants/design-system";
import { Icon, Input, InputProps } from "@rneui/themed";
import { useState } from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";

interface CommonInputProps extends InputProps {
  label?: string;
  errorText?: string;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: {
    name: string;
    type?: string;
    color?: string;
  };
  rightIcon?: {
    name: string;
    type?: string;
    color?: string;
    onPress?: () => void;
  };
  showPasswordToggle?: boolean;
  secureTextEntry?: boolean;
}

export const CommonInput = ({
  label,
  errorText,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  showPasswordToggle = false,
  secureTextEntry = false,
  inputContainerStyle,
  containerStyle,
  inputStyle,
  errorStyle,
  labelStyle,
  leftIconContainerStyle,
  rightIconContainerStyle,
  ...props
}: CommonInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getRightIcon = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={Colors.semantic.primary} />;
    }

    if (showPasswordToggle) {
      return (
        <TouchableOpacity onPress={handlePasswordToggle} activeOpacity={Opacity.pressed}>
          <Icon
            name={isPasswordVisible ? "eye-off" : "eye"}
            type="material-community"
            size={IconSizes.input}
            color={Colors.neutral.gray600}
          />
        </TouchableOpacity>
      );
    }

    if (rightIcon) {
      return (
        <TouchableOpacity
          onPress={rightIcon.onPress}
          disabled={!rightIcon.onPress}
          activeOpacity={Opacity.pressed}
        >
          <Icon
            name={rightIcon.name}
            type={rightIcon.type || "material"}
            size={IconSizes.input}
            color={rightIcon.color || Colors.neutral.gray600}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <Input
      label={label}
      labelStyle={[ComponentStyles.input.label, labelStyle]}
      errorMessage={errorText}
      errorStyle={[ComponentStyles.input.error, errorStyle]}
      containerStyle={[ComponentStyles.input.container, containerStyle]}
      inputContainerStyle={[
        ComponentStyles.input.inputContainer,
        isFocused && ComponentStyles.input.inputContainerFocused,
        errorText && ComponentStyles.input.inputContainerError,
        disabled && ComponentStyles.input.inputContainerDisabled,
        inputContainerStyle,
      ]}
      inputStyle={[
        ComponentStyles.input.input,
        disabled && ComponentStyles.input.inputDisabled,
        inputStyle,
      ]}
      leftIcon={
        leftIcon ? (
          <Icon
            name={leftIcon.name}
            type={leftIcon.type || "material"}
            size={IconSizes.input}
            color={leftIcon.color || Colors.neutral.gray600}
          />
        ) : undefined
      }
      leftIconContainerStyle={[ComponentStyles.input.iconContainer, leftIconContainerStyle]}
      rightIcon={getRightIcon()}
      rightIconContainerStyle={[ComponentStyles.input.iconContainer, rightIconContainerStyle]}
      secureTextEntry={showPasswordToggle ? !isPasswordVisible : secureTextEntry}
      disabled={disabled}
      disabledInputStyle={ComponentStyles.input.inputDisabled}
      onFocus={(e) => {
        setIsFocused(true);
        props.onFocus?.(e);
      }}
      onBlur={(e) => {
        setIsFocused(false);
        props.onBlur?.(e);
      }}
      {...props}
    />
  );
};