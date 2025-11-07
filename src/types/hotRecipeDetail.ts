export interface HotRecipeDetail {
  ranking: number;
  recipe_name: string;
  recipe_detail_ko?: string | null;
  recipe_detail_en?: string | null;
  image_url?: string | null;
  description?: string | null;
  cook_time?: string | number | null;
}
