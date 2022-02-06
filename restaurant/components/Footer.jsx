import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LA PINOZ PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R, Brook Road.
            <br /> Coimbatore - 641008
            <br /> 8838284021
          </p>
          <p className={styles.text}>
            13 B, NH Road.
            <br /> Coimbatore - 641025
            <br /> 8838284021
          </p>
          <p className={styles.text}>
            23 D, Near Gem Hospitals.
            <br /> Coimbatore - 641023
            <br /> 8838284021
          </p>
          <p className={styles.text}>
            88 Z, Cowly Brown Road.
            <br /> Coimbatore - 641450
            <br /> 8838284021
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
