import Image from 'next/image'
import Link from 'next/link'
import classes from './post-item.module.css'

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })



  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200} layout='responsive'/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>

        </div>

      </Link>
    </li>
  )
}

export default PostItem
