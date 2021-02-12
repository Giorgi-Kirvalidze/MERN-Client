import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/product.action'
import Paginate from '../components/Paginate'
import Product from '../components/Product'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList
    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <section >
            <h1>Latest products</h1>
            <div className="products">
                {
                    products.map((product) => {
                        return <Product key={product._id} product={product} />
                    })
                }
            </div>
            <Paginate
                pages={pages}
                page={page}
                keyword={keyword ? keyword : ''}
            />
        </section >
    )
}

export default HomeScreen
