import styles from"./ProductSection.module.css";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { cardData } from "@/constant/card";
import Link from "next/link";

function ProductSection() {
  return (
    
    <div>
        <section className={styles.product}>

          {cardData.map((item,index)=>{
            return(
             <Link href={`/shop/${item.id}`} key={'yasmeen'}>

            <div className={styles.card} key={index} >
              <div className={styles.topImgDiv} style={{backgroundColor:item.BackgroundColor}}>
                <Image src={item.src} alt={"picture"} width={300}
                 height={600} className={styles.cardImg}></Image>
                 
               </div>
              <div className={styles.bottomDiv}>
                <div className={styles.starDiv}>
                {[...Array(item.rating)] .map((_,index)=>{return <IoIosStar color="orange"  size={30} key={index}/>})}
              
                </div>

                <p style={{fontSize:"19px"}}>{item.heading}</p>
                <p style={{fontWeight: 600}}>{item.price}</p>
              </div>
              </div>;


              </Link>

               )})}
    


        </section>;
    </div>
  )
}

export default ProductSection