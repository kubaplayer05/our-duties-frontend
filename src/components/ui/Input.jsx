const Input = ({type = "text", placeholder = "", className, id, onChange = () => {}}) => {

    return (
        <input
            className={`text-sm bg-gray-100 shadow-md rounded-md px-4 py-2 selection:outline-blue-500 ${className}`}
            type={type}
            placeholder={placeholder}
            id={id}
            onChange={onChange}
        />
    )
}

export default Input