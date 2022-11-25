import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

function Header({ siteTitle }) {
  return (
    <nav className='blur-bg p-2 sticky top-0 w-full'>
      <Link to='/'>
        <h1>{siteTitle}</h1>
      </Link>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
