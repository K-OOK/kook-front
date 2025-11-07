import type { TopIngredient } from "../../types/topIngredient";
import * as styles from "./HotIngredientsList.css";

interface HotIngredientsListProps {
  ingredients: TopIngredient[];
  isLoading: boolean;
  isError: boolean;
  selectedIngredients: string[];
  onToggle: (ingredientName: string) => void;
  formatQuantity: (value: number) => string;
}

const HotIngredientsList = ({
  ingredients,
  isLoading,
  isError,
  selectedIngredients,
  onToggle,
  formatQuantity,
}: HotIngredientsListProps) => {
  if (isLoading) {
    return (
      <div className={styles.hotState} aria-live="polite">
        Loading popular ingredients...
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.hotState} role="alert">
        Unable to load hot ingredients. Please try again later.
      </div>
    );
  }

  if (!ingredients.length) {
    return (
      <div className={styles.hotState} aria-live="polite">
        Hot ingredients will appear here soon.
      </div>
    );
  }

  const isSelectedIngredient = (name: string) =>
    selectedIngredients.some(
      (selected) => selected.toLowerCase() === name.toLowerCase().trim()
    );

  return (
    <div className={styles.hotBoard}>
      <div className={styles.hotHeader}>
        <span className={styles.hotSubtitle}>Click to add into your ingredient list</span>
      </div>
      <div className={styles.hotRows}>
        {ingredients.map((item) => {
          const selected = isSelectedIngredient(item.ingredient_name);
          const buttonClassName = [
            styles.hotItemButton,
            selected ? styles.hotItemSelected : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <button
              key={item.ranking}
              type="button"
              className={buttonClassName}
              onClick={() => onToggle(item.ingredient_name)}
              aria-pressed={selected}
            >
              <span className={styles.hotNumber}>{item.ranking}</span>
              <span className={styles.hotLabelGroup}>
                <span className={styles.hotLabel}>{item.ingredient_name}</span>
                <span className={styles.hotQuantity}>
                  {formatQuantity(item.total_quantity)} sold
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HotIngredientsList;

