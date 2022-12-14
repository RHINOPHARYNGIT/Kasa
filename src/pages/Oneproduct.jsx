import { useParams } from "react-router-dom";
import products from "../__mocks__/data.json";

import Rating from "../components/Rating";
import Owner from "../components/Owner";
import Slider from "../components/Slider";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";

const Oneproduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, location, rating, host, equipments, description, pictures } =
    product;

  return (
    <div className="Oneproduct">
      <Slider slides={pictures} />
      <div className="Oneproduct__content">
        <div className="Oneproduct__informations">
          <h1 className="Oneproduct__title">{title}</h1>
          <p className="Oneproduct__location">{location}</p>
          <div className="Oneproduct__tags">
            {product.tags.map((tag, index) => (
              <Tags key={index} getTag={tag} />
            ))}
          </div>
        </div>
        <div className="Oneproduct__rating-and-host">
          <Rating rating={rating} />
          <Owner host={host} />
        </div>
      </div>
      <div className="Oneproduct__dropdowns">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
  );
};

export default Oneproduct;
