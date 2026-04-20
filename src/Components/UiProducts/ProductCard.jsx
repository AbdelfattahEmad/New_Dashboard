import "../../assets/Styles/_Cards.scss";

function ProductCard({ title, description, price, image }) {
  return (
    <div className="product_card">
      <div className="product_card_image">
        <img src={image} alt={title} />
      </div>

      <div className="product_card_content">
        <h3 className="product_title">
          {title}
        </h3>

        <p className="product_description">
          {description}
        </p>

        <div className="product_card_footer">
          <span className="product_price">
            ${price}
          </span>
          <button className="product_btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
