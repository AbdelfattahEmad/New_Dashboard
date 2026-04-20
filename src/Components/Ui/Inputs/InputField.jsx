import "../../../assets/Styles/_input_buttons.scss";

export default function InputField({
  type = "text",
  placeholder,
  icon,
  value,
  onChange
}) {
  return (
    <div className="input_group" style={{ marginBottom: "0px" }}>
      {icon &&
        <span className="icon">
          {icon}
        </span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
