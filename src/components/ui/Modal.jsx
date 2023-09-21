const Modal = ({children, className}) => {


    return (
        <div className={`bg-white shadow-md rounded absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 py-6 px-6 
        max-w-[800px] w-[80%] min-w-[350px] z-30 text-center ${className}`}>
            {children}
        </div>
    )
}

export default Modal