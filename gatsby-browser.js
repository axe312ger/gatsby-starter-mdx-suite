import React from 'react'
import propTypes from 'prop-types'

import IconsContext from '@gatsby-mdx-suite/contexts/icons'

import EntypoCheck from 'react-entypo-icons/lib/entypo/Check'
import EntypoControllerRecord from 'react-entypo-icons/lib/entypo/ControllerRecord'
import EntypoDotSingle from 'react-entypo-icons/lib/entypo/DotSingle'
import EntypoStar from 'react-entypo-icons/lib/entypo/Star'
import EntypoStarOutlined from 'react-entypo-icons/lib/entypo/StarOutlined'
import EntypoVinyl from 'react-entypo-icons/lib/entypo/Vinyl'
import EntypoFacebook from 'react-entypo-icons/lib/entypo/Facebook'
import EntypoInstagram from 'react-entypo-icons/lib/entypo/Instagram'
import EntypoYoutube from 'react-entypo-icons/lib/entypo/Youtube'
import EntypoLinkedin from 'react-entypo-icons/lib/entypo/Linkedin'

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This website has been updated. ` + `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const wrapRootElement = ({ element }) => (
  <IconsContext.Provider
    value={{
      check: { icon: EntypoCheck, scale: 1.2 },
      circle: { icon: EntypoVinyl, scale: 0.8 },
      dot: { icon: EntypoControllerRecord, scale: 0.8 },
      dotSmall: { icon: EntypoDotSingle, scale: 1.8 },
      star: { icon: EntypoStar },
      starOutlined: { icon: EntypoStarOutlined },
      facebook: { icon: EntypoFacebook },
      instagram: { icon: EntypoInstagram },
      youtube: { icon: EntypoYoutube },
      linkedin: { icon: EntypoLinkedin },
    }}
  >
    {element}
  </IconsContext.Provider>
)
wrapRootElement.propTypes = {
  element: propTypes.element.isRequired,
}
