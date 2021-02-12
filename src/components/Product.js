import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const Product = ({ product }) => {
    return (
        <article key={product.id} className="product">
            <figure>
                <Link to={`product/${product._id}`}> <img className="product__img" src={`./images/${product.productPictures[0].img}`} alt="" /></Link>
            </figure>

            <Link to={`/product/${product._id}`}><strong className="product__name">{product.name}</strong> </Link>
            <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
            />
            <p className="product__price">${product.price}</p>
        </article>
    )
}

export default Product
