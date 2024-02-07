import ProductCard from '@/components/ProductCard/ProductCard';
import Layout from "@/components/Layout/layout";
import styles from './productList.module.scss';


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getProductsData() {
    const staticProductsResponse = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });
    const products = await staticProductsResponse.json();
    return products;
}

export default async function ProductList() {

    const products = await getProductsData();

    return (
        <Layout>
            <div className={styles.container}>
                {products.map((product: any) => (
                    <div key={product.id} className={styles.productCard}>
                        <ProductCard image={product.images} text={product.title} />
                    </div>
                ))}
            </div>
        </Layout>

    );
};