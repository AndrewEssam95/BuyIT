import { Image } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const { container, title, text, button, leftSection, rightSection } = styles;

const NewCollection = () => {
  return (
    <section className={container}>
      <div className={leftSection}>
        <h1 className={title}>
          see our new <br />
          collection
        </h1>
        <Image
          src="https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20251/7774411/v1/l_20251-s5fl12z8-fwz-95-76-90-185_a.jpg"
          style={{
            width: "100%",
            height: "80%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>
      <div className={rightSection}>
        <Image
          src="https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20251/7639471/v1/l_20251-s59241z8-f9c-92-74-90-190_a.jpg"
          style={{
            width: "100%",
            height: "80%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
        <p className={text}>
          Discover our new collection now! Experience fresh styles and designs,
          perfect for updating your wardrobe with the latest trends.
        </p>
        <Link to="/products">
          <span className={button}>Buy Now</span>
        </Link>
      </div>
    </section>
  );
};

export default NewCollection;
