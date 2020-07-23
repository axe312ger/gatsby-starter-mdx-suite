import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

import ColorModeSwitcher from '../../../components/color-mode-switch'
import DefaultLayout from 'gatsby-theme-mdx-suite-base/src/components/layout/layout'

const ColorModeSwitcherWrapper = styled.div`
  display: fixed;
  bottom: 5vmin;
  right: 5vmin;
`

const Layout = ({ children }) => {
  return (
    <DefaultLayout>
      {children}
      <ColorModeSwitcherWrapper>
        <ColorModeSwitcher />
      </ColorModeSwitcherWrapper>
    </DefaultLayout>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
