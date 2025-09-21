import { Catalog } from "@/widgets/catalog";
import styles from "./page.module.scss";

export default function Main() {

  return (
    <div className={styles.page}>
      <Catalog/>
    </div>
  );
}
