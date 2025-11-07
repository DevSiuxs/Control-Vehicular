'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './SidebarLeft.module.css';
import Crono from "app/components/Cronometro/cronometro";

export default function SidebarLeft() {
  return (
    <div className={styles.sidebarLeft}>
      <div className={styles.logo}>
        <Image src="/favicon.ico" alt="Logo URANUS" width={150} height={150} className={styles.logoImg} />
        <p className={styles.subtitulo}>Sistema de Gestión Funeraria</p>
        <Link href="/Modulos/Adm-Sistemas/Adm-Sistemas">
          <button className={styles.btnView}>Ver</button>
        </Link>
      </div>

      <div className={styles.userData}>
        <h3>Datos de usuario</h3>
        <div className={styles.statusIndicators}>
        <div className={`${styles.statusDot} ${styles.dotBlue}`}></div>
        <div className={`${styles.statusDot} ${styles.dotGreen}`}></div>
        <div className={`${styles.statusDot} ${styles.dotOrange}`}></div>
        <div className={`${styles.statusDot} ${styles.dotYellow}`}></div>
        <div className={`${styles.statusDot} ${styles.dotRed}`}></div>
      </div>
        <p>Sistema operativo</p>
        <Link href="/User/user">
          <button className={styles.btnViewUser}>Ver</button>
        </Link>
      </div>

      <div className={styles.timeCard}>
        <h3>Tiempo en URANUS</h3>
        <div className={styles.timeDisplay}>
          <div className={styles.cronom}> 
          <Crono/>
        </div>
        </div>
      </div>

      <div className={styles.logout}>
        <Link href="/">
            <Image
              src="/icons/power-icon.webp"
              alt="Salir"
              width={40}
              height={40}
              className={styles.logoutButton}
            />
          </Link>
      </div>
    </div>
  );
}
