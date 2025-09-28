export default function Box({ children, className=""}) {
    return (
        <div className={`border border-gray-100 rounded-md ${className}`}>
            {children}
        </div>
    );

}