import classes from './hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src='/images/site/daniel.jpeg' alt='' width={300} height={300}/>
      </div>
      <h1>Hi I'm Daniel</h1>
      <p>I blog about web development - especialy frontedn framewordk like Angular or React</p>
    </section>
  )
}

export default Hero
