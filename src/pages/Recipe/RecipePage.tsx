"use client";

import { useCallback, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as styles from "./RecipePage.css.ts";
import IngredientInput from "../../components/Inputs/Ingredient/IngredientInput.tsx";
import LoadingScreen from "../../components/Loading/LoadingScreen.tsx";
import { motion } from "framer-motion";
import SubmitBtn from "../../components/Buttons/SubmitBtn.tsx";
import { apiClient } from "../../lib/axios";
import type { TopIngredient } from "../../types/topIngredient";
import HotIngredientsList from "../../components/recipe/HotIngredientsList";
import backBlue from "../../assets/back-blue.svg";
import backRed from "../../assets/back-red.svg";

const ingredientConfigs = [
  { rotation: 2.87, position: { top: "30%", left: "25%" } },
  { rotation: -10.49, position: { top: "43%", right: "25%" } },
  { rotation: 11.98, position: { bottom: "30%", left: "25%" } },
];

export default function RecipePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data: topIngredients,
    isLoading: isLoadingTopIngredients,
    isError: isErrorTopIngredients,
  } = useQuery<TopIngredient[]>({
    queryKey: ["topIngredients"],
    queryFn: async () => {
      const response = await apiClient.get<TopIngredient[]>(
        "/api/top-ingredients"
      );
      return response.data;
    },
    staleTime: 1000 * 60,
  });

  const quantityFormatter = useMemo(() => new Intl.NumberFormat("en-US"), []);

  const addIngredient = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    setIngredients((prev) => {
      if (
        prev.length >= 3 ||
        prev.some((item) => item.toLowerCase() === trimmed.toLowerCase())
      ) {
        return prev;
      }
      return [...prev, trimmed];
    });
  }, []);

  const toggleHotIngredient = useCallback((value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    setIngredients((prev) => {
      const lower = trimmed.toLowerCase();
      const existingIndex = prev.findIndex(
        (item) => item.toLowerCase() === lower
      );
      if (existingIndex !== -1) {
        return prev.filter((_, index) => index !== existingIndex);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, trimmed];
    });
  }, []);
  const [locale, setLocale] = useState<"ko" | "en">("ko");

  const handleAddIngredient = (ingredient: string) => {
    addIngredient(ingredient);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const mobileContainer = document.querySelector(".mobile-container");
    if (mobileContainer instanceof HTMLElement) {
      mobileContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    console.log(ingredients);
    console.log("Selected language:", locale);
    console.log("Ingredients:", ingredients);
    setIsClosing(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 800);
  };

  return (
    <main className={` ${styles.container}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Cook Korean food <br /> with the ingredients you have.
        </h1>
      </header>

      <section className={`${styles.potSection} `}>
        <img src={backBlue} alt="" className={styles.backBlue} />
        <img src={backRed} alt="" className={styles.backRed} />
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

          {isClosing && (
            <motion.svg
              width="175"
              height="41"
              viewBox="0 0 175 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                position: "absolute",
                top: "5px",
                zIndex: 10,
              }}
            >
              <path
                d="M89.001 0C91.7624 9.40606e-08 94.001 2.23858 94.001 5V12.0947C127.454 13.081 156.77 21.8251 175.002 41H0C18.7748 21.254 49.3041 12.5695 84.001 12.0273V5C84.001 2.23858 86.2396 1.20706e-07 89.001 0Z"
                fill="#3B3B3B"
              />
            </motion.svg>
          )}

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
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "8ch",
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
          locale={locale}
          onLocaleChange={setLocale}
        />
      </section>

      <section className={styles.hotSection}>
        <h2 className={styles.hotTitle}>🔥 Hot Ingredients</h2>
        <HotIngredientsList
          ingredients={topIngredients ?? []}
          isLoading={isLoadingTopIngredients}
          isError={isErrorTopIngredients}
          selectedIngredients={ingredients}
          onToggle={toggleHotIngredient}
          formatQuantity={(value: number) => quantityFormatter.format(value)}
        />
      </section>

      <SubmitBtn onClick={handleSubmit} />

      <LoadingScreen isVisible={isLoading} />
    </main>
  );
}
