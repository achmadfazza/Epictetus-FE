import { useState } from "react"
import FeaturedPost from '../components/FeaturedPost'
import CardPost from '../components/CardPost'
import Container from '../components/Container'
import Layout from '../components/Layout'
import mockPost from '../utils/posts.json';
import Head from "next/head"

export default function Home() {
  const [posts, setPost] = useState(mockPost)
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Layout >
        <Head>
          <title>Home &mdash; Epictetus</title>
        </Head>
        <Container >
          <FeaturedPost />
          <div className="flex -mx-4 flex-wrap mt-6 ">
            {posts.map((post) => (
              <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                <CardPost {...post} />
              </div>
            ))}
          </div>
        </Container>
      </Layout>
    </div >
  )
}
