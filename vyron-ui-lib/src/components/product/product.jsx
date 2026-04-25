import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.title} style={styles.image} />

      <div style={styles.content}>
        <h3 style={styles.title}>{product.title}</h3>
        <p style={styles.description}>{product.description}</p>

        <div style={styles.footer}>
          <span style={styles.price}>₹{product.price}</span>
          <button
            style={styles.button}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

const styles = {
  card: {
    width: "260px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "12px",
  },
  title: {
    fontSize: "18px",
    margin: "0 0 6px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    height: "40px",
    overflow: "hidden",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
  price: {
    fontWeight: "bold",
    color: "#222",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};