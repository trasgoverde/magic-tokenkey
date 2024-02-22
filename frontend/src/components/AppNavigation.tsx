import Link from "next/link";
import styles from "@/styles/Nav.module.css";

export default function AppNavigation({}) {
  return (
    <ul className={styles.linkArea}>
      <li>
        <Link href={"/collectibles"}>Inversiones</Link>
      </li>
      <li>
        <Link href={"/holders"}>Inmuebles</Link>
      </li>
    </ul>
  );
}
