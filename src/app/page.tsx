
import EmblaCarousel from "@/components/Carousel/carousel";
import CategoriesSection from "@/components/CategoriesSection/categoriesSection";
import Layout from "@/components/Layout/layout";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Page() {
  const staticCategoriesResponse = await fetch(`${API_BASE_URL}/categories`, { cache: 'force-cache' });
  const staticProductsResponse = await fetch(`${API_BASE_URL}/products`, { cache: 'force-cache' });
  
  if (!staticCategoriesResponse.ok || !staticProductsResponse.ok) {
    console.error('Failed to fetch categories or products');
  }
  
  const staticCategories = await staticCategoriesResponse.json();
  const staticProducts = await staticProductsResponse.json();

    return (
      <main>
        <Layout>
          <EmblaCarousel slides={staticProducts} />
          <CategoriesSection categories={staticCategories} />
        </Layout>
      </main>
    );

  }