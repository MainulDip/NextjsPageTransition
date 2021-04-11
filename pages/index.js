import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { server } from '../config/index'
// import { motion } from 'framer-motion'

export default function Home ({ articles }) {
  // console.log(articles)
  return (
    <div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
