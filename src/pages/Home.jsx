import React from "react";
import { Link } from "react-router-dom";

import image from "../design/banner.png";
import products from "../__mocks__/data.json";
import marketdata from "../__mocks__/aboutData";
import Banner from "../components/Banner";
import Thumbnails from "../components/Thumbnails";

const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={image} text={slogan} />
      </div>{" "}
      <section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
