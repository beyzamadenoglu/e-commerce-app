
import EmblaCarousel from "@/components/Carousel/carousel";
import CategoriesSection from "@/components/CategoriesSection/categoriesSection";
import Layout from "@/components/Layout/layout";

import { req } from '../utils/api'
export default async function Page() {
    const categories = await req('/categories');
    const products = await req('/products?offset=0&limit=10');

    console.log(products);

    return (<main>
    <Layout >
    <EmblaCarousel slides={products}/>
    <CategoriesSection categories={categories} />
    </Layout>
    </main>);

  }