const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-[#A61380] text-white px-4 py-2 rounded-xl hover:bg-[#8A4C7A] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
