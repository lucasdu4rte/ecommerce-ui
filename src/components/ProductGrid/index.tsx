import styles from "./styles.module.scss";

interface ProductGridProps {
  children: React.ReactNode;
}

export function ProductGrid({ children }: ProductGridProps) {
  return <div className={styles.grid}>{children}</div>;
}
