import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Card, Container, Row, Button } from "react-bootstrap";
import { SingleProduct } from "../data/base";

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  productImg: string;
  images: string[];
  description: string;
}

const SingleProductPage: React.FC = () => {
  function addDatatocart(product: Product) {
    console.log(product, "onClick={onClick}");
  }
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [imgIndex, setImgIndex] = useState(0);
  const handleClick = (index: number) => {
    setImgIndex(index);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const data = await SingleProduct(Number(id));
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;
  return (
    <section>
      <Container>
        <Row className="justify-content-between my-5">
          <Col md={4}>
            <Card key={product.id} className="border-0 ">
              <Card.Img
                variant="top"
                src={product.images[imgIndex]}
                height={200}
                width={200}
                className="rounded"
              />
              <div className="d-flex gap-3 my-3">
                {product.images.map((img: string, index: number) => (
                  <div>
                    <Card.Img
                      key={index}
                      variant="top"
                      src={img}
                      height={200}
                      width={200}
                      className="rounded"
                      onMouseOver={() => handleClick(index)}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col md={7}>
            <h6 className="fs20">{product.name}</h6>
            <div>{product.title}</div>
            <Card.Text className="fs16">Price: Rs {product.price}/-</Card.Text>
            <Card.Text className="fs16">
              description :: {product.description}/-
            </Card.Text>
            <div className="d-flex gap-4 my-4">
              <div>
                <button>-</button>
                <span>No of Items</span>
                <button>+</button>
              </div>
              <Button
                className="btn_custom-black clr-white btn"
                onClick={() => addDatatocart(product)}
              >
                Add to Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SingleProductPage;
