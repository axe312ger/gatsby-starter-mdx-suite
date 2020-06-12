import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import tw from 'twin.macro'

import MenuLevel from '@gatsby-mdx-suite/menu/menu-level'
import LanguageSwitch from '@gatsby-mdx-suite/i18n/language-switch'
import Image from '@gatsby-mdx-suite/mdx-image/image'
import ColorSet from '@gatsby-mdx-suite/mdx-color-set/color-set'
import centerToContentColumn from '@gatsby-mdx-suite/helpers/styling/center-to-content-column'

import LogoSVG from '../../assets/logo.svg'
import ColorModeSwitch from '../color-mode-switch'
import { useStaticQuery, graphql, Link } from 'gatsby'

const HeaderWrapper = styled.div(
  ({ hasBackgroundImage, theme }) => css`
    ${tw`relative bg-background`}

    ${hasBackgroundImage
      ? css`
          ${tw`text-white`}
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.13);
        `
      : css`
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        `}
  `
)

const HeaderContainer = tw.div`absolute z-20 inset-x-0 flex p-4 items-center justify-between`

const HeaderTitle = styled.h1`
  ${tw`m-1`}

  & svg {
    width: 32px;
  }
`

const HeaderMenuControls = styled.div`
  ${tw`flex items-center`}

  & > * {
    ${tw`py-4`}
  }
`

const HeaderContent = styled.div`
  ${tw`relative z-10 py-8 flex flex-col justify-center`}
  min-height: 32vh;

  ${centerToContentColumn}
`

const BackgroundImage = tw(Image)`absolute inset-0`

const HeaderBackgroundImageWrapper = styled.div`
  ${tw`absolute inset-0 z-0`}

  & .img {
    ${tw`z-10`}
  }

  &:before {
    ${tw`block absolute z-20 inset-0 bg-black`}
    content: '';
    opacity: 0.12;
  }
`
/**
 * Renders the header including menu and hero element of the page.
 *
 * Can have a background image.
 *
 * @example
 * <Header>
 *
 * # Some catching text
 *
 * </Header>
 */
const Header = ({ children, backgroundImageId, colorSet }) => {
  const result = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ColorSet name={colorSet}>
      <HeaderWrapper hasBackgroundImage={!!backgroundImageId}>
        <HeaderContainer>
          <HeaderTitle>
            <Link to="/" title={result.site.siteMetadata.title}>
              <LogoSVG />
            </Link>
          </HeaderTitle>
          <MenuLevel rootMenuItemId="menuRootHeader" />
          <HeaderMenuControls>
            <LanguageSwitch />
            <ColorModeSwitch />
          </HeaderMenuControls>
        </HeaderContainer>
        <HeaderContent>{children}</HeaderContent>
        {backgroundImageId && (
          <HeaderBackgroundImageWrapper>
            <BackgroundImage
              id={backgroundImageId}
              contextKey="background"
              fit="cover"
              style={{ position: 'static' }}
            />
          </HeaderBackgroundImageWrapper>
        )}
      </HeaderWrapper>
    </ColorSet>
  )
}

Header.defaultProps = {
  colorSet: 'blue',
}

Header.propTypes = {
  children: propTypes.node,
  backgroundImageId: propTypes.string,
  colorSet: propTypes.string,
}

export default Header
