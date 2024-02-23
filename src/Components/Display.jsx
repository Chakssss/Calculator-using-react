import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
      placeholder="Enter Values"
    />
  );
};

export default Display;
