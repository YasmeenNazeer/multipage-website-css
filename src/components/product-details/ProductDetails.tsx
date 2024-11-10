import React from 'react'
import styles from "./ProductDetails.module.css"
import Image from 'next/image'
import { aBeeZee } from '@/font'
import {  cardData} from "@/constant/card";

function ProductDetails(props:{cardId:number}) {
   const data= cardData.find((item)=>{return item.id == props.cardId})


  return (
    <div>
        <section className={styles.productDetails}>
            <div className={styles.leftimgDiv} style={{backgroundColor:data?.BackgroundColor}}>
                <Image src={data?.src || "/myImages/blue-dungry.png"} alt={"pic"} width={400} height={600} className={styles.img}></Image>
            </div>

            <div className={styles.righttextDiv}>
                <h1 className={aBeeZee.className}>{data?.heading}</h1>
                <p>{data?.price}</p>

                <div className={styles.cartDiv}>
                    <input type="number" />
                <button>ADD TO CART</button>
                </div>
                <p style={{fontSize:"30px"}}>Product Details</p>
                <p style={{fontSize:"17px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Eius labore dicta dolorem molestias sapiente adipisci error, 
                     atque est quod mollitia facilis praesentium ea amet veniam 
                     necessitatibus recusandae quae, quis consectetur accusamus qui
                      doloremque delectus earum eligendi maxime! Beatae, corporis cumque
                       nihil ducimus voluptate error ipsum saepe natus, rerum facilis non?
                        Reprehenderit sed magni at aliquam. Expedita iusto vel odit 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus veniam 
                       dolores itaque! Ea itaque excepturi assumenda minus odio sunt quisquam amet
                        ipsam. Voluptates neque voluptatibus voluptatem exercitationem non nisi. non?</p>
                
            </div>

        </section>
    </div>
  )
}

export default ProductDetails