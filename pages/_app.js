import '../styles/globals.scss'
import '../components/Layout'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
      //   staggerChildren: 0.1
    }
  },
  exit: { y: -10, opacity: 0 }
}

function MyApp ({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
