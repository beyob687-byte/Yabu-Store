'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Category = {
    name: string;
    value: string;
};

type CategoryProps = {
    categories: Category[];
    selectedCategory?: string;
};

const categories: { name: string; value: string }[] = [
    { name: "All", value: "ALL" },
    { name: "Men", value: "men" },
    { name: "Women", value: "women" },
];
export function CategoryBar() {
    // console.log("Categories received:", categories);
    const searchParams = useSearchParams();
    const selectedCategory = searchParams.get("category");

    return (
        <div className="category-filter">
            {categories.map((category) => (
                <Link
                    key={category.value}
                    href={
                        category.value === "ALL"
                            ? "/product"
                            : `/product?category=${category.value}`
                    }
                    className={
                        selectedCategory === category.value ||
                            (!selectedCategory && category.value === "ALL")
                            ? "active"
                            : ""
                    }
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
}
