import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { ProductsD } from "../../data/base";
import { useEffect, useState } from "react";
import styles from "./productCard.module.scss";
import Cards from "./Cards";
import Button from "../CTA/Button";

interface Items {
  id: number;
  name: string;
  price: number;
  title: string;
  category: {
    name: string;
    image: string;
  };
  images: string[];
}
interface ViewallProps {
  isHomepage: boolean;
}

const ProductCard: React.FC<ViewallProps> = ({ isHomepage }) => {
  const [dataHolder, setDataHolder] = useState<Items[]>([]);

  useEffect(() => {
    const ProductsDataHolder = async () => {
      try {
        const DataShow = await ProductsD();
        setDataHolder(DataShow);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    ProductsDataHolder();
  }, []);

  const prductsHomepageOnly = isHomepage ? dataHolder.slice(0, 8) : dataHolder;

  return (
    <section className={styles.productsContainer}>
      <Container>
        <Row as="ul">
          {dataHolder.length === 0
            ? [...Array(8)].map((_, index) => (
                <Card
                  as={Col}
                  md={3}
                  key={index}
                  className="border-0 overflow-hidden mt-4"
                >
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={12} style={{ height: "275px" }} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={12} />
                    <Placeholder xs={12} />
                    <Placeholder xs={12} />
                  </Placeholder>
                </Card>
              ))
            : prductsHomepageOnly.map((item) => (
                <Cards
                  key={item.id}
                  id={item.id}
                  productImg={
                    Array.isArray(item.images) ? item.images[0] : item.images
                  }
                  name={item.category.name}
                  price={item.price}
                  title={item.title}
                />
              ))}
        </Row>
        {isHomepage && (
          <div className="text-center mt-4">
            <Button
              btnName={"View all"}
              clsName={"btn_custom-black clr-white btn mb-4"}
              redirect={"/products"}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductCard;
