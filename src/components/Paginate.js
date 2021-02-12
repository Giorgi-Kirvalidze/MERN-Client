import React from 'react'
import { Link } from 'react-router-dom'
const Paginate = ({ pages, page, keyword = '' }) => {
    return (
        pages > 1 && (
            <div>
                {[...Array(pages).keys()].map((x) => (
                    <Link style={{ textDecoration: 'none', marginLeft: '1rem' }} key={x + 1} to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}>
                        <span key={x + 1} className="paginate__link">{x + 1}</span>
                    </Link>
                ))}
            </div>
        )
    )
}


export default Paginate
