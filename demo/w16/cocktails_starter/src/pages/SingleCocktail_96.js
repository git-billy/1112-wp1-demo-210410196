import React, { useState, useContext, useEffect } from "react";
import Loading from "../components/Loading_96";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context_96";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail_96 = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = async () => {
    setLoading(false);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = { name, image, info, category, glass, ingredients };
        setCocktail(newCocktail);
      } else {
        setCocktail([]);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" href="/">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
            alt="A1"
          />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> A1
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default SingleCocktail_96;
