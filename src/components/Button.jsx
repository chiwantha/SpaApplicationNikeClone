const Button = ({label, iconURL, backgroundColor, textColor, borderColor, padding_x, padding_y, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 
    border font-montserrat text-lg leading-none

    ${padding_x && padding_y ? `${padding_x} ${padding_y}`:
      "px-7 py-4" }
    
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
      "bg-coral-red  text-white border-red-100" }

    ${fullWidth === 1 ? `w-full`: null }
    
    hover:scale-105 transition-transform rounded-full `}
    >
        {label}

        {iconURL && <img src={iconURL} alt="ArrowIcon" className="ml-2 rounded-full w-6 h-6"/>}
    </button>
  )
}

export default Button