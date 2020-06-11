// Basics
import CTA from '@gatsby-mdx-suite/mdx-link/cta'
import Image from '@gatsby-mdx-suite/mdx-image/image'
import Link from '@gatsby-mdx-suite/mdx-link/link'
import Video from '@gatsby-mdx-suite/mdx-video/video'

// Layout
import Center from '@gatsby-mdx-suite/mdx-layout/center'
import Columns from '@gatsby-mdx-suite/mdx-layout/columns'
import Column from '@gatsby-mdx-suite/mdx-layout/column'
import FloatingImage from '@gatsby-mdx-suite/mdx-layout/floating-image'
import Gap from '@gatsby-mdx-suite/mdx-layout/gap'
import Grid from '@gatsby-mdx-suite/mdx-layout/grid'
import NarrowSection from '@gatsby-mdx-suite/mdx-layout/narrow-section'
import Section from '@gatsby-mdx-suite/mdx-layout/section'
import Viewport from '@gatsby-mdx-suite/mdx-layout/viewport'

// Boxes
import Boxes from '@gatsby-mdx-suite/mdx-boxes/boxes'
import Box from '@gatsby-mdx-suite/mdx-boxes/box'
import BoxCarousel from '@gatsby-mdx-suite/mdx-boxes/box-carousel'
import BoxCarouselSlide from '@gatsby-mdx-suite/mdx-boxes/box-carousel-slide'
import BoxVideo from '@gatsby-mdx-suite/mdx-boxes/box-video'

// Copy
import List from '@gatsby-mdx-suite/mdx-copy/list'
import ListItem from '@gatsby-mdx-suite/mdx-copy/list-item'
import Font from '@gatsby-mdx-suite/mdx-copy/font'
import TextBlock from '@gatsby-mdx-suite/mdx-copy/text-block'
import ResponsiveTextBlock from '@gatsby-mdx-suite/mdx-copy/responsive-text-block'
import Claim from '@gatsby-mdx-suite/mdx-copy/claim'
import Icon from '@gatsby-mdx-suite/mdx-copy/icon'

// Decorations
import Card from '@gatsby-mdx-suite/mdx-decoration/card'

// Form
import ContactForm from '@gatsby-mdx-suite/mdx-form/contact-form'

// Social Media
import BandcampTrack from '@gatsby-mdx-suite/mdx-bandcamp/bandcamp-track'
import InstagramPost from '@gatsby-mdx-suite/mdx-instagram/instagram-post'
import YoutubeVideo from '@gatsby-mdx-suite/mdx-youtube/youtube-video'

// Special use-case components
import Timeline from '@gatsby-mdx-suite/mdx-timeline/timeline'
import TimelineEntry from '@gatsby-mdx-suite/mdx-timeline/timeline-entry'
import MediaGallery from '@gatsby-mdx-suite/mdx-media-gallery/media-gallery'

// Animation
import Animate from '@gatsby-mdx-suite/mdx-animation/animate'

// Project specific components
import BlogPostListing from '../components/mdx/blog-post-listing'
import Header from '../components/mdx/header'

export default {
  Animate,
  BandcampTrack,
  BlogPostListing,
  Box,
  BoxCarousel,
  BoxCarouselSlide,
  Boxes,
  BoxVideo,
  Card,
  Center,
  Claim,
  Column,
  Columns,
  ContactForm,
  CTA,
  FloatingImage,
  Font,
  Gap,
  Grid,
  Header,
  Icon,
  Image,
  InstagramPost,
  Link,
  List,
  ListItem,
  MediaGallery,
  NarrowSection,
  ResponsiveTextBlock,
  Section,
  TextBlock,
  Timeline,
  TimelineEntry,
  Video,
  Viewport,
  YoutubeVideo,
  // Overwrite standard components with our styled ones
  ul: List,
}
