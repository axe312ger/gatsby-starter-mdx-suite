import React from 'react'
import propTypes from 'prop-types'

import DefaultLayout from 'gatsby-theme-mdx-suite-base/src/components/layout/layout'

const Layout = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
