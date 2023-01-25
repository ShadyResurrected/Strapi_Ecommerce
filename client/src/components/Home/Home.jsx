import "./Home.scss";

import { useEffect, useContext } from "react";

import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";

import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(
    Context
  );

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = () => {
    // populate=* is used to fetch all the data from strapi
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
