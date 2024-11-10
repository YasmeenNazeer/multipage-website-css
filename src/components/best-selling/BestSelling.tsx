"use client"
import styles from './BestSelling.module.css'
import { abhayaLibre , instrumentSans,aBeeZee} from '@/font'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { cardData } from "@/constant/card";
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'



function BestSelling() {

    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay:2000 , 
      stopOnInteraction:false ,stopOnMouseEnter:true})])

    useEffect(() => {
      if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
      }
    }, [emblaApi])
  return (
    <div>
        <section className={styles.bestSelling}>
            <h1 className={abhayaLibre.className}>Best Selling</h1>
            <p className={instrumentSans.className}>Lorem ipsum dolor sit amet consectetur Adscpicing.</p>

            <div className={`${styles.bestSellingSection} ${styles.embla}`}  ref={emblaRef}>
              <div className={styles.embla__container}>
                       

                       
                {cardData.map((data)=>{return(
                <div className={styles.embla__slide} key={data.id}>
                    <div className={styles.imageDiv} style={{backgroundColor:data.BackgroundColor }}>
                    <Image src={data.src} alt={'product 1'} width={371}
                     height={606} className={styles.cardImage}></Image>
                  </div>

                  <div className={styles.cardText}>
                    <h1 className={aBeeZee.className}>{data.heading}</h1>

                    <div className={styles.priceTags}> 
                      <p>{data.price}   |   {data.rating}.0 <FaStar size={24} color='yellow' className={styles.star}/></p>
                      </div>
                       </div>
                       </div>
                       )})}



               </div>
               </div>
              <Link href={"/shop"}><button>See More</button></Link>

        </section>
    </div>
  )
}

export default BestSelling