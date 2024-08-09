import { Card } from "@/components/ui/card";
import Link from "next/link";
import { categories } from "@/utils/data/categories/constants";

export default function CategoriesPage() {
  return (
    <div className="bg-background dark:bg-muted flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
      <Card className="max-w-8xl w-full p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="border-muted-foreground/10 group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg"
            >
              <Link
                href={`${category.href}`}
                className="absolute inset-0 z-10"
                prefetch={false}
              >
                <span className="sr-only">View category</span>
              </Link>
              <div className="bg-card group-hover:text-primary-foreground flex h-full flex-col items-center justify-center gap-4 p-6 text-center transition-all duration-300 group-hover:bg-primary">
                <div className="bg-muted/20 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-primary/20">
                  <category.icon className="text-muted-foreground group-hover:text-primary-foreground h-8 w-8 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-medium tracking-tight">
                  {category.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground text-sm transition-all duration-300">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
