import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      //background: `#8975CC`,
      marginBottom: `6rem`,
      color: `#FFF5FF`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // height: `.5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          className='header'
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          <span>Profile</span>
          <span>2020</span>
          <span>Tokyo</span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
