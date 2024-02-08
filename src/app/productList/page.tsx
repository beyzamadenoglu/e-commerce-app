
import ProductCard from '@/components/ProductCard/ProductCard';
import { Navbar } from '@/components/Navbar/navbar';
import Layout from "@/components/Layout/layout";
import styles from './productList.module.scss';


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Product {
    id: number;
    name: string;
    price: number;
}

let products: Product[] = [];


async function getProductsData() {
    const staticProductsResponse = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
    const products = await staticProductsResponse.json();
    return products;
}

async function getProductsByCategoriesData(id:number) {
    const staticProductsResponse = await fetch(`${API_BASE_URL}/categories/${id}/products`, { cache: 'no-store' });
    const products = await staticProductsResponse.json();
    return products;
}


async function getCategoriesData() {
    const staticProductsResponse = await fetch(`${API_BASE_URL}/categories`, { cache: 'no-store' });
    const categories = await staticProductsResponse.json();
    return categories;
}

export default async function ProductList() {

    let categories = await getCategoriesData();
    let products = await getProductsData();

    const categoryNames = categories.map((category: any) => category?.name);

    const handleCategory = async(id:any) => {
        'use server';
        let test = await getProductsByCategoriesData(1);
        products = test;
    }

    return (
        <Layout>
            <div style={{display: 'flex'}}>
            <Navbar data={categoryNames} handleCategoryClick={handleCategory}/>
            <div className={styles.container}>
                {products.map((product: any) => (
                    <div key={product.id} className={styles.productCard}>
                        <ProductCard image={product.images} text={product.title} />
                    </div>
                ))}
            </div>
            </div>
        </Layout>

    );
};