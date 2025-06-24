import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const ReusableInputField = ({
  name,
  control = null,
  label = "",
  placeholder = "",
  type = "text",
  defaultValue = "",
  validation = false,
  rules = {},
  disabled = false,
  value = "",
  className = "",
  inputClassName = "",
  labelClassName = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const renderPasswordToggleIcon = () => (
    <span
      className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-muted-foreground"
      onClick={togglePasswordVisibility}
    >
      {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </span>
  );

  const renderInput = (fieldProps = {}) => (
    <div className="relative">
      <Input
        {...fieldProps}
        type={isPasswordType ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        disabled={disabled}
        className={`px-5 py-6 border focus:ring-0 shadow-none bg-transparent rounded-lg text-foreground font-nunito text-base ${inputClassName}`}
        {...props}
      />
      {isPasswordType && renderPasswordToggleIcon()}
    </div>
  );

  if (control) {
    return (
      <FormField
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={validation ? rules : {}}
        render={({ field }) => (
          <FormItem className={`flex flex-col ${className}`}>
            {label && (
              <FormLabel
                className={`text-base lg:text-lg font-medium text-neutral-900 mb-1 ${labelClassName}`}
              >
                {label}
              </FormLabel>
            )}
            <FormControl>{renderInput(field)}</FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className={`text-base md:text-lg font-medium text-neutral-900 mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <Input
          id={name}
          name={name}
          type={isPasswordType ? (showPassword ? "text" : "password") : type}
          // value={value}
          disabled={disabled}
          placeholder={placeholder}
          className={`px-5 py-6 pr-12 border-none focus:ring-0 shadow-none bg-transparent rounded-lg text-foreground font-nunito text-lg ${inputClassName}`}
          {...props}
        />
        {isPasswordType && renderPasswordToggleIcon()}
      </div>
    </div>
  );
};

export default ReusableInputField;
