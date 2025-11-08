export type Step = { name: string; description: string };
export type Section =
  | { title: string; ingredients: string[] }
  | { title: string; steps: Step[] }
  | { title: string; recommendation: string[] }
  | { title: string; tip: string };

export type ParsedRecipe = {
  title: string;
  message?: string; // 추가
  sections: Section[];
};

export function parseRecipeMarkup(raw: string): ParsedRecipe {
  // <template> 태그 추출
  const templateMatch = raw.match(/<template>([\s\S]*?)<\/template>/);
  const content = templateMatch ? templateMatch[1] : raw;

  // <recipe> 태그 추출
  const recipeMatch = content.match(/<recipe>([\s\S]*?)<\/recipe>/);
  if (!recipeMatch) {
    throw new Error("No <recipe> tag found");
  }

  const recipeContent = recipeMatch[1];

  // title 파싱
  const titleMatch = recipeContent.match(/<title>\s*([\s\S]*?)\s*<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // message 파싱 (선택적)
  const messageMatch = recipeContent.match(
    /<message>\s*([\s\S]*?)\s*<\/message>/
  );
  const message = messageMatch ? messageMatch[1].trim() : undefined;

  // sections 파싱
  const sectionMatches = recipeContent.matchAll(
    /<section>([\s\S]*?)<\/section>/g
  );
  const sections: Section[] = [];

  for (const sectionMatch of sectionMatches) {
    const sectionContent = sectionMatch[1];
    const sectionTitleMatch = sectionContent.match(
      /<title>\s*([\s\S]*?)\s*<\/title>/
    );
    const sectionTitle = sectionTitleMatch ? sectionTitleMatch[1].trim() : "";

    // ingredients 처리
    const ingredientsMatch = sectionContent.match(
      /<ingredients>\s*([\s\S]*?)\s*<\/ingredients>/
    );
    if (ingredientsMatch) {
      const ingredients = ingredientsMatch[1]
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("-"))
        .map((line) => line.substring(1).trim());
      sections.push({ title: sectionTitle, ingredients });
      continue;
    }

    // steps 처리
    const stepsMatch = sectionContent.match(/<steps>([\s\S]*?)<\/steps>/);
    if (stepsMatch) {
      const stepMatches = stepsMatch[1].matchAll(/<step>([\s\S]*?)<\/step>/g);
      const steps: Step[] = [];
      for (const stepMatch of stepMatches) {
        const stepContent = stepMatch[1];
        const nameMatch = stepContent.match(/<name>\s*([\s\S]*?)\s*<\/name>/);
        const descMatch = stepContent.match(
          /<description>\s*([\s\S]*?)\s*<\/description>/
        );
        steps.push({
          name: nameMatch ? nameMatch[1].trim() : "",
          description: descMatch ? descMatch[1].trim() : "",
        });
      }
      sections.push({ title: sectionTitle, steps });
      continue;
    }

    // recommendation 처리
    const recommendationMatch = sectionContent.match(
      /<recommendation>\s*([\s\S]*?)\s*<\/recommendation>/
    );
    if (recommendationMatch) {
      const recommendation = recommendationMatch[1]
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("-"))
        .map((line) => line.substring(1).trim());
      sections.push({ title: sectionTitle, recommendation });
      continue;
    }
  }

  // tip 처리
  const tipMatch = recipeContent.match(/<tip>([\s\S]*?)<\/tip>/);
  if (tipMatch) {
    const tipContent = tipMatch[1];
    const tipTitleMatch = tipContent.match(/<title>\s*([\s\S]*?)\s*<\/title>/);
    const tipContentMatch = tipContent.match(
      /<content>\s*([\s\S]*?)\s*<\/content>/
    );
    sections.push({
      title: tipTitleMatch ? tipTitleMatch[1].trim() : "",
      tip: tipContentMatch ? tipContentMatch[1].trim() : "",
    });
  }

  return { title, message, sections };
}
