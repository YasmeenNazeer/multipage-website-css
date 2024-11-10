
import Image from 'next/image';
import styles from './HeroSection.module.css'
import {italiana ,instrumentSans} from '@/font';


function HeroSection() {
  return (
<div>
<section className={styles.hero}>

  
  <div className={styles.leftDiv}>

    <h1 className={italiana.className}>Discover And <br /> Find Your <br /> Own Fashion</h1>
    <p className={instrumentSans.className}>Explore our curated collection of stylish <br /> clothing and accessories trailed to Your
    <br />unique teste</p>
    <button className={instrumentSans.className}>EXPLORE NOW</button>
  </div>

      
      <div className={styles.rightDiv}>
        <div className={styles.rightimageBg}>
          <Image src={"/myImages/blue.png"} alt='main picture' width={400}
           height={400}></Image>
        </div>
      </div>

         </section>
</div>
 )
}

export default HeroSection