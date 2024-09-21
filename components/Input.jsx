import React from "react";
import cn from "classnames";

export const Input = ({
  name,
  label,
  value,
  onChange,
  type,
  defaultValue,
  disabled,
  className,
  wrapperClassName,
  error = false,
}) => {
  return (
    <div className={wrapperClassName}>
      <input
        name={name}
        placeholder={label}
        disabled={disabled}
        className={cn(
          "py-2 md:py-3 rounded-md w-full border-1 px-3 md:px-7 text-gray-900 placeholder:text-sm md:placeholder:text-base placeholder:text-gray-400 ring-light-blue-500",
          className,
          {
            "field__input--disabled": disabled,
            "border-red": error,
          }
        )}
        type={type}
        value={value || defaultValue}
        onChange={onChange}
      />
      {error && <span className="text-xs text-red">{error}</span>}
    </div>
  );
};
