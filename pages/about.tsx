import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { AUTHOR_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import MainMenu from '../components/main-menu'
import MeetAuthor from '../components/meet-author'

export default function Index() {
  return (
    <>
      <Layout>
        <Container>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 md:mt-12 center">
            About, <span className="font-light">Experience and Ethos</span>
          </h1>
          <MeetAuthor></MeetAuthor>
          <div>
            <h1 className="text-2xl">
              <span className="text-teal-500">#</span>&nbsp;Data Engineering
            </h1>
            <p className="p-3 pl-6">
              Understanding the scope and scale is paramount for any data project, as each endeavor and company brings its unique set of demands. For operational databases up to a few terabytes, on-site tools and server-based libraries like PostgreSQL, Pandas, and Dask often suffice for reporting and analysis. However, when grappling with vast data volumes, traditional tools falter. Here, an ETL layer becomes indispensable for extracting, transforming, and loading data into streamlined systems, facilitating data partitioning and task distribution. Solutions like Snowflake or platforms like Apache Hadoop are adept at handling such challenges.
            </p>
          </div>
          <div>
            <h1 className="text-2xl">
              <span className="text-teal-500">#</span>&nbsp;Solution Architecture
            </h1>
            <p className="p-3 pl-6">
              In shaping or expanding a platform, we anchor our decisions to long-term user-centric objectives, choosing methodologies and technologies that align. For a dynamic real-time user experience, technologies like React and GraphQL become pivotal, linking web elements directly to data shifts. Conversely, if our edge is high-performance APIs, we'd lean into microservices, distributed systems, and solutions like AWS Elastic Load Balancing.
            </p>
          </div>
          <h1 className="text-2xl">
            <span className="text-teal-500">#</span>&nbsp;Solution Engineering
          </h1>
          <p className="p-3 pl-6">
            Prospects and customers primarily seek clarity on your offerings and their benefits, coupled with an enjoyable collaboration experience. Achieving this starts with posing insightful questions and truly listening to their responses. The more precise our queries, the fewer we need, maximizing our learning. Adopting the language and tools familiar to our audience enhances rapport. Crucially, establishing clear expectations from the outset ensures our intentions align with the customer's goals, whether in meetings, projects, or tasks.
          </p>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
