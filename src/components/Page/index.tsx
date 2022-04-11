import { Filter } from "../Filter";
import { ProductCard } from "../ProductCard";
import { ProductGrid } from "../ProductGrid";
import styles from "./styles.module.scss";

export function Page() {
  return (
    <>
      <div>Home {`>`} Camisetas</div>

      <div className={styles.listContent}>
        <aside className={styles.listAside}>
          <Filter />
        </aside>
        <div className={styles.listConteiner}>
          <div className={styles.details}>
            <h1>Camisetas</h1>

            <p>
              Junto com a calça jeans, as camisetas masculinas são as peças
              favoritas do guarda-roupa dos caras descolados. Das versões
              básicas às descoladas, elas são fiéis companheiras para todos os
              compromissos casuais. Geralmente feita de algodão, a peça é
              confortável e funciona em todos os tipos de corpo. Se você prefere
              uma pegada mais cool, que tal apostar nas versões estampadas ou
              alongadas? Vai sobrar estilo!
            </p>
          </div>
          <div className={styles.listOrdenation}>
            <label>
              Ordenar
              <select name="">
                <option value="">Mais vendidos</option>
                <option value="">Menor Preço</option>
                <option value="">Maior Preço</option>
              </select>
            </label>

            <div className={styles.productsCount}>
              <strong>7000</strong>
              <span>Produtos</span>
            </div>
          </div>
          <main>
            <ProductGrid>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </ProductGrid>
          </main>
          <div className={styles.pagination}></div>
        </div>
      </div>
    </>
  );
}
