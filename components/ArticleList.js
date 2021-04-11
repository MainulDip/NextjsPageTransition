import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
import { motion } from 'framer-motion'

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
  exit: { y: 0, scale: 0.9, opacity: 0, transformOrigin: 'center center' }
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

const ArticleList = ({ articles }) => {
  return (
    <motion.div
      variants={stagger}
      initial='initial'
      animate='animate'
      exit='exit'
      className={articleStyles.grid}
    >
      {articles.map((article, i) => (
        // <h3 key={i}>{article.title}</h3>
        <motion.div
          variants={fadeInUp}
          className={articleStyles.card}
          style={{}}
        >
          <ArticleItem key={i} article={article} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ArticleList
