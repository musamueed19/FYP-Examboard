export default function InputField({
    label,
  name,
  type,
  required = true,
  onChange,
  value,
  placeholder,
  disabled = false,
  inline = false,
}) {
  return (
    <div
      className={`${inline ? "flex" : "flex flex-col"} ${
        disabled ? "disabled" : ""
      }`}
    >
      <label
        className="font-medium text-lg text-[#344054]"
        htmlFor={name}
      >
        {label}{" "}
        <span className={`${required ? "text-red-500" : "hidden"}`}>*</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="outline-none border-2 rounded-md py-1 px-3"
      />
    </div>
  );
}
