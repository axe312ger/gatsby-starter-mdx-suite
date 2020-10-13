// Defaults
import defaultComponents from 'gatsby-theme-mdx-suite-base/src/gatsby-theme-mdx-suite-core/components'

// Basics
import Video from '@gatsby-mdx-suite/mdx-video/video'

// Layout
import FloatingImage from '@gatsby-mdx-suite/mdx-layout/floating-image'
import NarrowSection from '@gatsby-mdx-suite/mdx-layout/narrow-section'

// Social Media
import InstagramPost from '@gatsby-mdx-suite/mdx-instagram/instagram-post'
import YoutubeVideo from '@gatsby-mdx-suite/mdx-youtube/youtube-video'

// Animation
import Animate from '@gatsby-mdx-suite/mdx-animation/animate'

// Project specific components
import Header from 'gatsby-theme-mdx-suite-base/src/components/header/header'
import CustomComponent from '../components/mdx/custom-component'

export default {
  ...defaultComponents,
  Animate,
  FloatingImage,
  InstagramPost,
  NarrowSection,
  Video,
  YoutubeVideo,
  Header,
  CustomComponent,
}
