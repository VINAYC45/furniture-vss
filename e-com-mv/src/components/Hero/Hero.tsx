import { Container } from "react-bootstrap";
import HeroImg from "../../assets/images/hero-img.png";
import Button from "../CTA/Button";
import styles from "./hero.module.scss";
const Hero: React.FC = () => {
  return (
    <>
      <section>
        <div className={`${styles.hero}`}>
          <div>
            <img src={HeroImg} alt="img" className={`${styles.hero__Img}`} />
          </div>
          <Container>
            <div className={`${styles.hero__content} `}>
              <h6 className="clr-lightwhite mb-3">
                New Generation Ceramic Tile{" "}
              </h6>
              <p className="fs16 clr-lightwhite mb-4">
                Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend
                aptent dapibus metus maecenas consequat. Elementum interdum a
                semper. Netus nullam eros nisi volutpat nibh ex ultricies.
                Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </p>
              <div>
                <Button
                  clsName="btn_custom"
                  btnName="Learn more"
                  redirect="/products"
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
export default Hero;
