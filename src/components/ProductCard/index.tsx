import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import styles from "./styles.module.scss";

export function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.extra}>
        {/* <button className={styles.madeToOrderButton}>SOB ENCOMENDA</button> */}
        <button className={styles.favoriteButton}>
          <HiOutlineHeart size="25" color="#681727" />
        </button>
      </div>
      <a className={styles.link} href="#">
        <img
          className={styles.thumbnail}
          src="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
          title="Camiseta Reserva"
          alt="Camiseta Reserva"
        />
        <div className={styles.information}>
          <div className={styles.title}>
            <h2>
              <span className={styles.titleText}>Camiseta Reserva</span>
            </h2>
          </div>
          <div className={styles.originalPrice}>R$ 3500,00</div>
          <div className={styles.price}>R$ 3500,00</div>
          <div className={styles.priceInstallments}>ou 3x de R$ 1.666,66</div>
        </div>
      </a>
      <div className={styles.actions}>
        <div className={styles.actionsContainer}>
          <button className={styles.addCartButton}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
