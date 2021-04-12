import articleStyle from '../styles/Article.module.css'
import Link from 'next/link'
import { imageprefix } from '../config/index'
// import Image from 'next/image'

const ArticleItem = ({ article, item }) => {
  return (
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <a href=''>
        <div className='sArticle-left'>
          <div
            className='sArticle-left-image'
            style={{}}
            style={{
              position: 'relative',
              width: '100%',
              height: '147px',
              marginBottom: '20px'
            }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              // src={`/../../../images/${article.image}`}
              src={`${imageprefix}/images/Optimized/${article.image}`}
              alt='Picture of the author'
              // width={'auto'}
              // height={'auto'}
              // layout='fill'
              // objectFit='contain'
            />
          </div>
        </div>
        <h3 className='font-gray'>{article.title} &rarr;</h3>
        <p className='font-fade'>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
