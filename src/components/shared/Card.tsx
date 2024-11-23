import React from 'react'
import { iCardProps } from '../../models/interface'

const Card: React.FC<iCardProps> = ({ image, title, price,  category, rating,  customStyles = {}, onCardClick}) => {
  return (
    <div
      className="rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
      style={customStyles}
      onClick={onCardClick}
    >
      <div className="overflow-hidden relative rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className='top-0 absolute bg-white px-2 rounded-b-lg rounded-r-none right-0'>{ rating }</span>
      </div>
     
      <div className="p-4 text-left">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-xl font-bold text-primary">${price}</p>
      </div>
    </div>
  )
}

export default Card