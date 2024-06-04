import styles from "./button.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item kg ${bought && "active"}`}>
      {foodItem}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
