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
              <ProductCard
                title="Camiseta Reserva"
                originalPrice="R$ 3800,00"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite
                toggleFavorite={() => null}
                addToCart={() => null}
              />
              <ProductCard
                title="Camiseta Reserva"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite
                toggleFavorite={() => null}
                addToCart={() => null}
              />
              <ProductCard
                title="Camiseta Reserva"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite
                toggleFavorite={() => null}
                addToCart={() => null}
              />
              <ProductCard
                title="Camiseta Reserva"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite
                toggleFavorite={() => null}
                addToCart={() => null}
              />
              <ProductCard
                title="Camiseta Reserva"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite={false}
                toggleFavorite={() => null}
                addToCart={() => null}
              />
              <ProductCard
                title="Camiseta Reserva"
                price="R$ 3500,00"
                priceInstallments="ou 3x R$ 667,00"
                thumbnail="https://static.netshoes.com.br/produtos/camiseta-reserva-caraca-muleke-masculina/14/B67-2019-014/B67-2019-014_zoom1.jpg?ts=1640574543&ims=544x"
                link="/p/camiseta-reserva"
                isFavorite
                toggleFavorite={() => null}
                addToCart={() => null}
              />
            </ProductGrid>
          </main>
          <div className={styles.pagination}></div>
        </div>
      </div>
    </>
  );
}
