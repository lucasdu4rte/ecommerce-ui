import styles from "./styles.module.scss";

export function Filter() {
  return (
    <div className={styles.container}>
      <h3 className={styles.head}>FILTROS POR</h3>
      <div className={styles.title}>Categorias</div>
      <div className={styles.content}>
        <ul className={styles.categoriesList}>
          <a href="#Camisetas">
            <li className={styles.categoryActive}>Camisetas</li>
          </a>
          <a href="#Calças">
            <li className={styles.category}>Calças</li>
          </a>
          <a href="#Tênis">
            <li className={styles.category}>Tênis</li>
          </a>
          <a href="#Bonés">
            <li className={styles.category}>Bonés</li>
          </a>
          <a href="#Acessórios">
            <li className={styles.category}>Acessórios</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
