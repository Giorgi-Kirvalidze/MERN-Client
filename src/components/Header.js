import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/user.action'
import { Link, Route } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleSignout = (e) => {
        e.preventDefault()
        dispatch(signout())
    }
    const renderSignedInLinks = () => {
        return (
            <li className="nav__item"><Link onClick={handleSignout} className="nav__link" to="/signout">Sign out</Link></li>
        )
    }

    const renderNonSignedInLinks = () => {
        return (
            <>
                <li className="nav__item"><Link className="nav__link" to="/signin">Sign in</Link></li>
                <li className="nav__item"><Link className="nav__link" to="/signup">Sign up</Link></li>
            </>
        )
    }
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/"><h1>Brand</h1></Link>
                <Route render={({ history }) => <SearchBox placeholder="Search" className="nav__search" type="text" history={history} />} />
                <ul className="nav__list">
                    {user.authenticate ? renderSignedInLinks() : renderNonSignedInLinks()}
                </ul>
            </nav>
        </header >
    )
}

export default Header
