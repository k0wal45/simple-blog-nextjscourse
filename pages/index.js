import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featured-posts"
import { getfeaturedPosts } from "../lib/posts-util"
import Head from "next/head"


function HomePage(props) {

  return <Fragment>
    <Head>
      <title>Daniel's Blog</title>
      <meta name="description" content="Welcome in my blog" />
    </Head>
    <Hero />
    <FeaturedPosts posts={props.posts} />
  </Fragment>
}

export function getStaticProps() {
  const featuredPosts = getfeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage