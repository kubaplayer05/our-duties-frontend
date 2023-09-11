const Button = ({children, disabled = false, type = "button", className}) => {

    return (
        <button
            type={type}
            className={`bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-base 
            text-gray-50 font-medium px-4 py-2 rounded-md transition shadow-sm ${className}`}
            disabled={disabled}>
            {children}
        </button>
    )
}

export default Button