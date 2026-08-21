import CategoryPage from "@/components/CategoryPage";
import type { Metadata } from "next";
import { categories } from "@/lib/articles";

const slug = "steam";
const category = categories.find((c) => c.slug === slug)!;

export const metadata: Metadata = {
  title: category.name,
  description: category.description,
};

export default function Page() {
  return <CategoryPage slug={slug} />;
}
