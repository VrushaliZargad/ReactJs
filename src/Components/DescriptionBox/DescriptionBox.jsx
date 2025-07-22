import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                A lightweight, usually knitted, pullover shirt, close-fitting at the neck and with long sleeves. 
                It is typically made of cotton or a cotton blend and is often worn as a casual or athletic garment.
            </p>
            <p>
                The term "t-shirt" originated from the shape of the garment, which resembles the letter "T" when laid flat. 
                T-shirts are versatile and can be worn alone or layered under other clothing. They come in various styles, 
                colors, and designs, making them a popular choice for self-expression and fashion.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox