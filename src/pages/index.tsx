import React from 'react';
import axios from 'axios';

// Define the Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

interface Category {
  id: number;
  name: string;
}

interface HomePageProps {
  products: Product[];
  categories: Category[];
}

const HomePage: React.FC<HomePageProps> = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>(products);

  // Filter products based on selected category
  React.useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(product => product.category.id === Number(selectedCategory)));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <div>
      {/* Navbar placeholder */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl">My Store</h1>
        </div>
      </nav>

      <div className="container mx-auto py-8">
        {/* Category Dropdown */}
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Products List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-500">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Fetching data with SSR
export const getServerSideProps = async () => {
  try {
    const productsResponse = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    const categoriesResponse = await axios.get<Category[]>('https://api.escuelajs.co/api/v1/categories');

    return {
      props: {
        products: productsResponse.data,
        categories: categoriesResponse.data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch products or categories:', error);
    return {
      props: {
        products: [],
        categories: [],
      },
    };
  }
};

export default HomePage;
