import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import type { HotRecipe } from "../../types/hotRecipe";
import chefIcon from "../../assets/chef.svg";
import timer from "../../assets/timer.svg";
import arrowRight from "../../assets/arrow.svg";
import ingredients from "../../assets/ingredients.svg";
import {
  ingredientAmount,
  ingredientItem,
  ingredientList,
  ingredientNameBadge,
  ingredientsHeading,
  ingredientsSection,
  modalContent,
  modalDescription,
  modalFooter,
  modalHeroImage,
  modalOverlay,
  modalPrimaryButton,
  modalTitle,
  modalTitleIcon,
  modalTitleIconImage,
  modalTitleLeading,
  modalTitleMainRow,
  modalTitleRow,
  modalHeader,
  modalMetaIcon,
  modalTimeChip,
} from "../../styles/trendModal.css";

interface TrendRecipeModalProps {
  recipe: HotRecipe;
  onClose: () => void;
}

const TrendRecipeModal = ({ recipe, onClose }: TrendRecipeModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const fallbackLabel = "준비 중";

  const description = useMemo(() => {
    const detail = recipe.description ?? recipe.recipe_detail_en ?? recipe.recipe_detail_ko ?? "";
    if (!detail) {
      return fallbackLabel;
    }

    const plain = detail
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return plain || fallbackLabel;
  }, [recipe, fallbackLabel]);

  const cookTimeLabel = useMemo(() => {
    const cookTimeRaw = recipe.cook_time ?? recipe.cook_time_minutes;
    if (cookTimeRaw == null) {
      return `time ${fallbackLabel}`;
    }

    const cookTimeString = `${cookTimeRaw}`.trim();
    if (!cookTimeString) {
      return `time ${fallbackLabel}`;
    }

    if (/^\d+$/.test(cookTimeString)) {
      return `time ${cookTimeString} min`;
    }

    return `time ${cookTimeString}`;
  }, [recipe, fallbackLabel]);

  const ingredientItems = recipe.ingredients?.filter((item) => item && item.name?.trim());

  return createPortal(
    <div
      className={modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="trend-recipe-modal-title"
      onClick={onClose}
    >
      <div className={modalContent} onClick={(event) => event.stopPropagation()}>
        <header className={modalHeader}>
          <div className={modalTitleRow}>
            <div className={modalTitleMainRow}>
              <div className={modalTitleLeading}>
                <span className={modalTitleIcon} aria-hidden={true}>
                  <img src={chefIcon} alt="" className={modalTitleIconImage} />
                </span>
                <h2 id="trend-recipe-modal-title" className={modalTitle}>
                  {recipe.recipe_name}
                </h2>
              </div>
              {cookTimeLabel && (
                <span className={modalTimeChip}>
                  <span className={modalMetaIcon} aria-hidden={true}>
                  <img src={timer} alt="" />
                  </span>
                  {cookTimeLabel}
                </span>
              )}
            </div>
            {description && <p className={modalDescription}>{description}</p>}
          </div>
        </header>

        <img className={modalHeroImage} src={recipe.image_url ?? ""} alt={recipe.recipe_name} loading="lazy" />

        <section className={ingredientsSection} aria-label="Recipe ingredients">
          <h3 className={ingredientsHeading}><img src={ingredients} alt="" /> Ingredients </h3>
          {ingredientItems && ingredientItems.length > 0 ? (
            <div className={ingredientList}>
              {ingredientItems.map((ingredient, index) => (
                <div className={ingredientItem} key={`${ingredient.name}-${index}`}>
                  <span className={ingredientNameBadge}>{ingredient.name}</span>
                  {ingredient.amount && <span className={ingredientAmount}>{ingredient.amount}</span>}
                </div>
              ))}
            </div>
          ) : (
            <p className={modalDescription}>Ingredient details will appear here soon.</p>
          )}
        </section>

        <footer className={modalFooter}>
          <button className={modalPrimaryButton} type="button" aria-label="Start cooking">
          <img src={arrowRight} alt="" />
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default TrendRecipeModal;

