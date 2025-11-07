import * as styles from "./SubmitBtn.css.ts";

interface SubmitBtnProps {
  onClick: () => void;
}

const SubmitBtn = ({ onClick }: SubmitBtnProps) => {
  return (
    <button className={styles.cookButton} onClick={onClick}>
      Let's KOOK!
    </button>
  );
};

export default SubmitBtn;
