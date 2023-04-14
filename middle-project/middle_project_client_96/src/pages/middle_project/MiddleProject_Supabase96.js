import { useState, useEffect } from "react";

import Wrapper from "../../assets/wrapper/midprep_96/Products_scss_96";

// import { useDemoContext_96 } from '../../context/DemoContext_96'
// import { useServerContext_96 } from '../../context/ServerContext_96'
import { useSupabaseContext_96 } from '../../context/SupabaseContext_96'

const MiddleProjectNodeServerContextPage_96 = () => {
  const { pName, pId, blogs } = useSupabaseContext_96();
  return (
    <Wrapper>
      <section className="blogs">
        <div className="section-title">
          <h2>Fetch Blogs From Supabase Server Context</h2>
          <h3>
            {pName} {pId}
          </h3>
        </div>
        <div className="shop-page">
          <div className="collection-overview">
            <div className="collection-preview">
              <h1 className="title">Countrys</h1>
              <div className="preview">
                {blogs.map((item) => {
                  const { pid, pname, price, cat_id, img_url } = item;
                  return (
                    <div className="collection-item" key={pid}>
                      <img className="image" src={img_url} />
                      <div className="collection-footer">
                        <span className="name">{pname}</span>
                        <span className="price">{price}</span>
                      </div>
                      <button className="custom-button">Add to Cart</button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default MiddleProjectNodeServerContextPage_96;
