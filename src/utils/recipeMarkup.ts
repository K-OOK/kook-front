export type Step = { name: string; description: string };
export type Section =
  | { title: string; ingredients: string[] }
  | { title: string; steps: Step[] }
  | { title: string; recommendation: string[] }
  | { title: string; tip: string };

export type ParsedRecipe = {
  title: string;
  sections: Section[];
};

function text(t: string | null | undefined) {
  return (t ?? "").trim();
}

export function parseRecipeMarkup(xmlLike: string): ParsedRecipe {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlLike, "text/xml");

  // 오류 방지
  const title = text(doc.querySelector("recipe > title")?.textContent);

  const sections: Section[] = [];
  doc.querySelectorAll("recipe > section").forEach((sec) => {
    const stitle = text(sec.querySelector(":scope > title")?.textContent);

    // ingredients
    const ing = sec.querySelector(":scope > ingredients");
    if (ing) {
      const lines =
        ing.textContent
          ?.split("\n")
          .map((l) => l.replace(/^\s*-\s*/, "").trim())
          .filter(Boolean) ?? [];
      sections.push({ title: stitle || "ingredients", ingredients: lines });
      return;
    }

    // steps
    const stepsNode = sec.querySelector(":scope > steps");
    if (stepsNode) {
      const steps: Step[] = [];
      stepsNode.querySelectorAll(":scope > step").forEach((s) => {
        steps.push({
          name: text(s.querySelector("name")?.textContent),
          description: text(s.querySelector("description")?.textContent),
        });
      });
      sections.push({ title: stitle || "Steps", steps });
      return;
    }

    // recommendation
    const recNode = sec.querySelector(":scope > recommendation");
    if (recNode) {
      const lines =
        recNode.textContent
          ?.split("\n")
          .map((l) => l.replace(/^\s*-\s*/, "").trim())
          .filter(Boolean) ?? [];
      sections.push({
        title: stitle || "Recommendation",
        recommendation: lines,
      });
      return;
    }
  });

  // <tip>은 section 밖에 있을 수 있음
  const tipNode = doc.querySelector("recipe > tip");
  if (tipNode) {
    const ttitle = text(tipNode.querySelector("title")?.textContent) || "Tip";
    const content = text(tipNode.querySelector("content")?.textContent);
    if (content) sections.push({ title: ttitle, tip: content });
  }

  return { title, sections };
}
