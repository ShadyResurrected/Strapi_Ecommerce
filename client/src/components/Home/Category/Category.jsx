import "./Category.scss";

import cat1 from "../../../assets/category/cat-1.jpg";

const Category = ({ categories }) => {
console.log("This from categ " + categories)
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories.data.map((item) => (
          <div key={item.id} className="category">
            <img src={process.env.REACT_APP_BASE_URL + item.attributes.img.data.attributes.url} alt="Category" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
