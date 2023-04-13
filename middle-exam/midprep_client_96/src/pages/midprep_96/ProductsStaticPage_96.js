import { useState } from 'react';

import Wrapper from '../../assets/wrapper/midprep_96/Products_scss_96';

// import Wrapper from '../../assets/wrapper/midprep_xx/Products_css_xx';

const ProductsStaticPage_96 = () => {
  const [name, setName] = useState('ChungChun Wang');
  const [id, setId] = useState('210410196');

  return (
    <Wrapper>
      <div class='shop-page'>
        {/* <h1 style='text-align: center'>
          Midprep_96:{name} {id}
        </h1> */}
        <div class='collection-overview'>
          <div class='collection-preview'>
            <h2 class='title'>Hats</h2>
            <div class='preview'>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Brown Brim</span>
                  <span class='price'>25</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/blue-beanie.png' />
                <div class='collection-footer'>
                  <span class='name'>Blue Beanie</span>
                  <span class='price'>18</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-cowboy.png' />
                <div class='collection-footer'>
                  <span class='name'>Brown Cowboy</span>
                  <span class='price'>35</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/grey-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Grey Brim</span>
                  <span class='price'>25</span>
                </div>
              </div>
            </div>
          </div>
          <div class='collection-preview'>
            <h2 class='title'>Womens</h2>
            <div class='preview'>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Blue Tanktop</span>
                  <span class='price'>25</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Floral Blouse</span>
                  <span class='price'>20</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Floral Dress</span>
                  <span class='price'>80</span>
                </div>
              </div>
              <div class='collection-item'>
                <img class='image' src='/crown/img/hats/brown-brim.png' />
                <div class='collection-footer'>
                  <span class='name'>Red Dots Dress</span>
                  <span class='price'>80</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsStaticPage_96;
