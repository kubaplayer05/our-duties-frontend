const Input = (
    {
        type = "text",
        placeholder = "",
        className,
        id,
        value,
        onChange = () => {},
        onBlur = () => {},
        onFocus = () => {},
    }) => {

    return (<input
        className={`text-sm bg-gray-100 shadow-md rounded-md px-4 py-2 ${className}`}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
    />)
}

export default Input