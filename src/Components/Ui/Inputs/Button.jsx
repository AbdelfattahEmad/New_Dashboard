import styles from "./Button.module.scss";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  className = ""
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
