"use client";

import type React from "react";
import { useState } from "react";
import * as styles from "./IngredientInput.css.ts";

interface IngredientInputProps {
  onAddIngredient: (ingredient: string) => void;
  ingredients: string[];
  onRemoveIngredient: (index: number) => void;
  maxIngredients: number;
  locale: "ko" | "en";
  onLocaleChange: (locale: "ko" | "en") => void;
}

export default function IngredientInput({
  onAddIngredient,
  ingredients,
  onRemoveIngredient,
  maxIngredients,
  locale,
  onLocaleChange,
}: IngredientInputProps) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() && ingredients.length < maxIngredients) {
        onAddIngredient(input);
        setInput("");
      }
    }
  };

  const isMaxReached = ingredients.length >= maxIngredients;

  return (
    <div className={styles.container}>
      {/* 토글을 완전히 인풋 박스 바깥에 배치 */}
      <div className={styles.topRow}>
        <button
          className={styles.langToggle}
          type="button"
          aria-pressed={locale === "ko"}
          onClick={() => onLocaleChange(locale === "ko" ? "en" : "ko")}
        >
          <span
            className={styles.langToggleOption}
            data-active={locale === "ko" ? "true" : "false"}
          >
            kor
          </span>
          <span
            className={styles.langToggleOption}
            data-active={locale === "en" ? "true" : "false"}
          >
            eng
          </span>
          <div
            className={styles.langToggleSlider}
            aria-hidden
            style={{
              left: locale === "ko" ? "4px" : "calc(50% + 4px)",
            }}
          />
        </button>
      </div>

      <div className={styles.inputWrapper}>
        <div className={styles.tagsContainer}>
          {ingredients.map((ingredient, index) => (
            <div key={index} className={styles.ingredientChip}>
              <span>{ingredient}</span>
              <button
                onClick={() => onRemoveIngredient(index)}
                className={styles.removeBtn}
                aria-label={`Remove ${ingredient}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter the materials you have!"
          className={styles.input}
          disabled={isMaxReached}
        />
      </div>
    </div>
  );
}
