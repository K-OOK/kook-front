"use client";

import { useState } from "react";
import * as styles from "./RecipePage.css.ts";
import IngredientInput from "../../components/Inputs/Ingredient/IngredientInput.tsx";

const ingredientConfigs = [
  { rotation: 2.87, position: { top: "30%", left: "25%" } },
  { rotation: -10.49, position: { top: "43%", right: "25%" } },
  { rotation: 11.98, position: { bottom: "30%", left: "25%" } },
];

export default function RecipePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (ingredient: string) => {
    if (ingredients.length < 3 && ingredient.trim()) {
      setIngredients((prev) => [...prev, ingredient.trim()]);
    }
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Cook Korean food <br /> with the ingredients you have.
        </h1>
      </header>

      <section className={styles.potSection}>
        {/* ✅ potContainer는 position: relative 여야 함 (styles에서 보장) */}
        <div className={styles.potContainer}>
          <svg
            width="276"
            height="152"
            viewBox="0 0 276 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.potSvg}
          >
            <path
              d="M60 42H52.4873C52.4951 41.8341 52.5 41.6675 52.5 41.5C52.5 34.9251 39.0096 23.6395 32 22.5801V13H60V42Z"
              fill="#363636"
            />
            <path
              d="M218 42H225.781C225.773 41.84 225.768 41.6792 225.768 41.5176C225.768 35.1693 239.74 24.2728 247 23.25V14H218V42Z"
              fill="#363636"
            />
            <path
              d="M51 0H227V127C227 140.807 215.807 152 202 152H76C62.1929 152 51 140.807 51 127V0Z"
              fill="#626262"
            />
            <rect y="10" width="39" height="16" rx="8" fill="#8A8A8A" />
            <rect x="237" y="10" width="39" height="16" rx="8" fill="#8A8A8A" />
          </svg>

          <div className={styles.ingredientsList}>
            {ingredients.map((ingredient, index) => {
              const config = ingredientConfigs[index];
              return (
                <div
                  key={`${ingredient}-${index}`}
                  className={styles.ingredientTag}
                  style={{
                    position: "absolute",
                    transform: `rotate(${config.rotation}deg)`,
                    ...config.position,
                    opacity: 1,
                  }}
                >
                  <span>{ingredient}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.inputSection}>
        <IngredientInput
          onAddIngredient={handleAddIngredient}
          ingredients={ingredients}
          onRemoveIngredient={handleRemoveIngredient}
          maxIngredients={3}
        />
      </section>

      <section className={styles.hotSection}>
        <h2 className={styles.hotTitle}>🔥 Hot Ingredients</h2>
        <div className={styles.recipesGrid}>
          <div className={styles.recipeCard} />
          <div className={styles.recipeCard} />
          <div className={styles.recipeCard} />
        </div>
      </section>

      <button className={styles.cookButton}>Let's KOOK!</button>
    </main>
  );
}
