import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { listProductDetails } from '../actions/product.action.js'


const ProductScreen = ({ history, match }) => {
    // const products = useSelector(state => state.productList.products)
    // const product = products.find(product => product._id === match.params.id)
    const productDetails = useSelector((state) => state.productDetails)
    const { product } = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        if (!product._id || product._id !== match.params.id) {
            dispatch(listProductDetails(match.params.id))
        }
    }, [dispatch, match])

    return (
        <div className="productScreen">
            <Link className="product__link" to="/">Go Back</Link>
            <figure className="product__figure">
                <figcaption>{product.name}</figcaption>
                {/* <img className="product__figure--img" src={`/images/${product.productPictures[0].img}`} alt="" /> */}
            </figure>
            <div className="product__description">
                <p>Description:</p>
                <p>{product.description}</p>

                <Rating
                    value={product.rating}
                    text={` ${product.numReviews} reviews`}
                />
                <p>Price:${product.price}</p>
            </div>
            <div className="product__action">
                <p> price : ${product.price}</p>
                <p>status: {product.quantity >= 1 ? `${product.quantity} in Stock` : 'Out of stock'}</p>
                <p>Add quantity in Cart:</p>
                <div>
                    <select>
                        {[...Array(product.quantity).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                                {x + 1}
                            </option>
                        ))}
                    </select>
                    <button disabled={product.quantity === 0}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
