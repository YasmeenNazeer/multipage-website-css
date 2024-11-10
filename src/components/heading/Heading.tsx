import styles from "./Heading.module.css"

function Heading() {
  return (
    <div className={styles.heading}>
    <h1>Our Products</h1>
    <div className={styles.underline}></div>

    <p>Here you can check our new arrivals with discounted price</p>
    </div>   
  )
}

export default Heading