
import { ibmPlexSerif, inter } from "@/font"
import styles from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
   <section className={styles.footer}> 

    <div className={`${styles.fashionDiv} ${inter.className}`}>
     <h1>Diva&apos;s </h1>
     <p className={ibmPlexSerif.className}>SOCIAL MEDIA</p>

     <div className={styles.iconsDiv}>
     <FaFacebookSquare size={40}  color="#1877F2"/>
     <FaXTwitter size={40}  color="black"/>
     <RiInstagramFill  size={40} color="#FEDA77"/>
     </div>
    </div>

     <div className={styles.shop}>
      <h1>SHOP</h1>
      <ul>
        <li> Product </li>
        <li>  Overview</li>
        <li>  Pricing</li>
        <li>  Release</li>
      </ul>

     </div>

     <div className={styles.compony}>
      <h1>COMPANY</h1>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>News</li>
        <li>Support</li>
      </ul>
      </div>
  
 
 <div className={styles.submit}>
    <h1>STAY UP TO DATE</h1>
    <div className={styles.inputDiv}>  
      <input type="text" placeholder="Enter your email" className={styles.input} /> 
      <button>SUBMIT</button>
       </div>
 </div>
   </section>
    </div>
  )
}






export default Footer