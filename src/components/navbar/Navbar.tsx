"use client";
import React from "react";
import { TiThMenu } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setOpen(!open);
  };
  return (
    <>
      
      <nav className={styles.nav}>
        <h1>Diva&apos;s Mart</h1>
        <AnimatePresence>
        {open == true ? (
          
          <motion.div className={`${styles.navLinksDiv} ${styles.adjustDiv}`}
          key={"menu"}
            initial={{height:0,opacity:0}}
          animate={{height:"350px",opacity:1}}
          exit={{height:0,opacity:0}}
          transition = {{duration:0.5}}
          >
            <ul>
              <li>
                <Link href="/">HOME</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/shop">SHOP</Link>
              </li>
             
              <li>
                {" "}
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
            <button>LOGIN</button>
          </motion.div>
          
        ) : (
          <div className={`${styles.navLinksDiv}`}>
            <ul>
              <li>
                <Link href="/">HOME</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/shop">SHOP</Link>
              </li>
              
              <li>
                {" "}
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
            <button>LOGIN</button>
          </div>
        )}
        </AnimatePresence>
        <TiThMenu
          size={35}
          className={styles.hambergermenu}
          onClick={showFunc}
        />
      </nav>
      
    </>
  );
}

export default Navbar;
