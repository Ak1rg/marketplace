import { Catalog } from "@/widgets/catalog";
import styles from "./page.module.scss";
import { Header } from "@/widgets/header";

export default function Main() {

  return (
    <div className={styles.page}>
      <Header/>
      <Catalog/>
    </div>
  );
}
