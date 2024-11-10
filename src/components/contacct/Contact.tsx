import React from 'react';

import styles from './Contact.module.css';
import { abhayaLibre } from '@/font';

export default function ContactPage() {
  return (
    <div>
     
      <div className={styles.container}>
        <h1 className={`${styles.title} ${abhayaLibre.className}`}>Contact Us</h1>
        <p className={styles.subtitle}>We will love to hear from you! Reach out for any queries or support.</p>

        <div className={styles.infoSection}>
          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>General Inquiries</h2>
            <p>Email us at <a href="mailto:support@divasmart.com" className={styles.link}>support@divasmart.com</a></p>
            <p>Call us at <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a></p>
          </div>

          <div className={styles.infoBox}>
            <h2 className={styles.infoTitle}>Location</h2>
            <p>123 Fashion Street,<br />Karachi,Pakistan KP 10001</p>
          </div>
        </div>

        <form className={styles.contactForm}>
          <h2 className={styles.formTitle}>Send Us a Message</h2>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" name="name" className={styles.input} required />

          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />

          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" className={styles.textarea}  required></textarea>

          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </div>
    </div>
  );
}
