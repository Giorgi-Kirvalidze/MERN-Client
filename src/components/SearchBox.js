import React, { useState } from 'react'

const SearchBox = ({ history, className, placeholder }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" className={className} placeholder={placeholder} value={keyword} onChange={(e) => setKeyword(e.target.value)} id="" />
        <button className="btn" type="submit"> Search </button>
      </form>
    </>
  )
}

export default SearchBox
