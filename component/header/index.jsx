import logoImage from '@/assets/logo.jpg';
import Link from "next/link";
import styles from '@/component/header/index.module.scss'
const Index = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={`flex ${styles.link} `}><img src={logoImage.src} alt="logo"/> <span className='self-end ml-2 font-bold'>Next Level Food</span> </Link>
      <nav>
        <ul className='flex font-bold'>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li className={styles.li}>
            <Link href="/community">Foods Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Index;
