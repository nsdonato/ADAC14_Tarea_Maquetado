const Button = ({ className, disabled = false, children }) => {
    return (
        <button className={className} disabled={disabled}>{children}</button>
    );
}

export default Button
