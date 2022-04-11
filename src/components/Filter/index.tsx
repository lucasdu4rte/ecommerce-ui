import styles from "./styles.module.scss";

export function Filter() {
  return (
    <div className={styles.container}>
      <h3 className={styles.head}>FILTROS POR</h3>
      <div className={styles.title}>Categorias</div>
      <div className={styles.content}>
        <ul className={styles.categoriesList}>
          <a href="#Castiçais">
            <li className={styles.categoryActive}>Castiçais</li>
          </a>
          <a href="#Apliques">
            <li className={styles.category}>Apliques</li>
          </a>
          <a href="#Ostensórios">
            <li className={styles.category}>Ostensórios</li>
          </a>
          <a href="#Relicários">
            <li className={styles.category}>Relicários</li>
          </a>
          <a href="#Tecas">
            <li className={styles.category}>Tecas</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
