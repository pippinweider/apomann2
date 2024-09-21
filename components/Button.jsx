import Link from "next/link";
import cn from "classnames";

export default function Button({
  children,
  onClick,
  type,
  className = "",
  link = "",
  disabled = false,
}) {
  if (link) {
    return (
      <Link
        href={link}
        className={cn(`button button--${type}`, className)}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(`button button--${type}`, className, {
        "cursor-not-allowed opacity-50 border-gray500 hover:bg-gray300":
          disabled,
      })}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
