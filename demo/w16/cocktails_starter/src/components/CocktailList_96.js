import React from "react";
import Cocktail_96 from "./Cocktail_96";
import Loading from "./Loading_96";
import { useGlobalContext } from "../context_96";

const CocktailList_96 = () => {
  const { loading, cocktails } = useGlobalContext();
  // console.log("cocktailList", cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail_96 key={item.id} {...item}></Cocktail_96>;
        })}
      </div>
    </section>
  );
};

export default CocktailList_96;
