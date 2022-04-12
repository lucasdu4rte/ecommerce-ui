import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import styles from "./styles.module.scss";

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  priceInstallments: string;
  thumbnail: string;
  link: string;
  isMageToOrder: boolean;
  isFavorite: boolean;
  toggleFavorite: () => void;
  addToCart: () => void;
}

export function ProductCard({
  title,
  price,
  originalPrice,
  priceInstallments,
  thumbnail,
  link,
  isMageToOrder,
  isFavorite,
  toggleFavorite,
  addToCart,
}: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.extra}>
        {isMageToOrder && (
          <button className={styles.madeToOrderButton}>SOB ENCOMENDA</button>
        )}
        <button className={styles.favoriteButton} onClick={toggleFavorite}>
          {isFavorite ? (
            <HiHeart size="25" color="#681727" />
          ) : (
            <HiOutlineHeart size="25" color="#681727" />
          )}
        </button>
      </div>
      <a className={styles.link} href={link}>
        <img
          className={styles.thumbnail}
          src={thumbnail}
          title={title}
          alt={title}
        />
        <div className={styles.information}>
          <div className={styles.title}>
            <h2>
              <span className={styles.titleText}>{title}</span>
            </h2>
          </div>
          <div className={styles.originalPrice}>{originalPrice}</div>
          <div className={styles.price}>{price}</div>
          <div className={styles.priceInstallments}>{priceInstallments}</div>
        </div>
      </a>
      <div className={styles.actions}>
        <div className={styles.actionsContainer}>
          <button className={styles.addCartButton} onClick={addToCart}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}
