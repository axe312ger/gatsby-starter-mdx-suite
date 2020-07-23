// Defaults
import defaultComponents from 'gatsby-theme-mdx-suite-base/src/gatsby-plugin-theme-ui/components'

// Basics
import Video from '@gatsby-mdx-suite/mdx-video/video'

// Layout
import FloatingImage from '@gatsby-mdx-suite/mdx-layout/floating-image'
import NarrowSection from '@gatsby-mdx-suite/mdx-layout/narrow-section'
import Viewport from '@gatsby-mdx-suite/mdx-layout/viewport'

// Boxes
import Boxes from '@gatsby-mdx-suite/mdx-boxes/boxes'
import Box from '@gatsby-mdx-suite/mdx-boxes/box'
import BoxCarousel from '@gatsby-mdx-suite/mdx-boxes/box-carousel'
import BoxCarouselSlide from '@gatsby-mdx-suite/mdx-boxes/box-carousel-slide'
import BoxVideo from '@gatsby-mdx-suite/mdx-boxes/box-video'

// Copy
import List from '@gatsby-mdx-suite/mdx-copy/list'

// Decorations
import Card from '@gatsby-mdx-suite/mdx-decoration/card'

// Social Media
import InstagramPost from '@gatsby-mdx-suite/mdx-instagram/instagram-post'
import YoutubeVideo from '@gatsby-mdx-suite/mdx-youtube/youtube-video'

// Special use-case components
import Timeline from '@gatsby-mdx-suite/mdx-timeline/timeline'
import TimelineEntry from '@gatsby-mdx-suite/mdx-timeline/timeline-entry'
import MediaGallery from '@gatsby-mdx-suite/mdx-media-gallery/media-gallery'

// Animation
import Animate from '@gatsby-mdx-suite/mdx-animation/animate'

// Project specific components
import Header from 'gatsby-theme-mdx-suite-base/src/components/header/header'

export default {
  ...defaultComponents,
  Animate,
  Box,
  BoxCarousel,
  BoxCarouselSlide,
  Boxes,
  BoxVideo,
  Card,
  FloatingImage,
  Header,
  InstagramPost,
  MediaGallery,
  NarrowSection,
  Timeline,
  TimelineEntry,
  Video,
  Viewport,
  YoutubeVideo,
  // Overwrite standard components with our styled ones
  ul: List,
}
