// import {useRouter} from 'next/router'
import Link from 'next/link'
// import Image from 'next/image'
import { server, imageprefix } from '../../../config/index'
import { motion } from 'framer-motion'
// import vacation from './../../../images'
import { articles } from '../../../data'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: -47,
    scale: 0.9,
    opacity: 0
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
      //   staggerChildren: 0.1
    }
  },
  exit: { y: 0, scale: 0.9, opacity: 0, transformOrigin: 'left top' }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
}

const article = ({ article }) => {
  //   const router = useRouter()
  //   const { id } = router.query
  console.log(article)
  return (
    <motion.div
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='exit'
      //   exit={{ opacity: 0 }}
    >
      <div className='sArticle'>
        <div className='sArticle-left'>
          <div
            className='sArticle-left-image'
            style={{}}
            // style={{
            //   position: 'relative',
            //   width: '200px',
            //   height: '200px',
            //   maxHeight: '200px',
            //   maxWidth: '200px'
            // }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              // src={`/../../../images/${article.image}`}
              src={`${imageprefix}/images/Optimized/${article.image}`}
              // alt='Picture of the author'
              // width={'auto'}
              // height={'auto'}
              // layout='fill'
              // objectFit='contain'
            />
            {console.log(`${server}/images/${article.image}`)}
          </div>
        </div>

        <div className='sArticle-right'>
          <motion.h1
            className='font-gray'
            variants={fadeInUp}
            // initial='initial'
            // animate='animate'
            // exit='exit'
          >
            {article.title}
          </motion.h1>
          <motion.p
            className='text-fade'
            variants={fadeInUp}
            // initial='initial'
            // animate='animate'
            // exit='exit'
          >
            {article.body}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            // initial='initial'
            // animate='animate'
            // exit='exit'
          >
            <Link href='/'>
              <span className='global-button'>Go Back</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

export const getStaticProps = async context => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  //   )
  // const res = await fetch(`${server}/api/articles/${context.params.id}`)
  // const article = await res.json()
  const article = articles.find(article => article.id === context.params.id)

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  // const res = await fetch(`${server}/api/articles`)
  // const articles = await res.json()

  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  //   console.log(paths)
  return { paths, fallback: false }
}

export default article
