import styled from 'styled-components';

const Wrapper = styled.div`
    .blogs {
    --primary: #645cff;
    --primary-dark: #3c3799;
    --grey-light: #f1f5f9;
    --grey: #64748b;
    --grey-dark: #0f172a;
    --letter-spacing: 2px;
    --fluid-width: 90vw;
    --max-width: 1170px;
    --border-radius: 0.15rem;
    padding: 5rem 0;

      .section-title {
          text-align: center;
          text-transform: capitalize;
          margin: 2rem;
          letter-spacing: 2px;
      }

      .blogs-center {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          width: var(--fluid-width);
          max-width: var(--max-width);
          margin: 0 auto;
          /* max-width: 500px; */
      }

      @media screen and (min-width: 450px) {
          .blogs-center {
          grid-template-columns: repeat(2, 1fr);
          }
      }

      @media screen and (min-width: 768px) {
          .blogs-center {
          grid-template-columns: repeat(3, 1fr);
          }
      }

      @media screen and (min-width: 992px) {
          .blogs-center {
          grid-template-columns: repeat(4, 1fr);
          }
      }

      .blogs-center2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 2rem;
          width: var(--fluid-width);
          max-width: var(--max-width);
          margin: 0 auto;
          /* max-width: 500px; */
      }

      .blog {
          background-color: white;
          padding: 0.75rem;
          border-radius: var(--border-radius);
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: 0.5s ease-in-out all;

          &:hover {
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
          }

          .img {
          width: 100%;
          height: 12rem;
          display: block;
          object-fit: cover;
          }

          &-img {
          border-radius: var(--border-radius);
          margin-bottom: 0.5rem;
          }

          &-content {
          padding-bottom: 1rem;
          }

          .blog-content span {
          text-transform: uppercase;
          color: var(--primary);
          letter-spacing: var(--letter-spacing);
          font-weight: 500;
          }

          .blog-content h3 {
          text-transform: capitalize;
          letter-spacing: var(--letter-spacing);
          margin: 0.5rem 0;
          }

          .blog-content p {
          color: var(--grey);
          margin-bottom: 0.5rem;
          }

          .blog-content a {
          text-transform: capitalize;
          color: var(--primary-dark);
          letter-spacing: 1px;
          }
      }
    }

    .collection-page {
      display: flex;
      flex-direction: column;
    
      .title {
        font-size: 38px;
        margin: 15px auto;
      }
    
      .items {
        // display: flex;
        // justify-content: flex-start;
        // flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
      }
    }
    
    .collection-item {
      width: 22vw;
      display: flex;
      flex-direction: column;
      height: 300px;
      align-items: center;
      position: relative;
      margin-bottom: 25px;
    
      .image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        margin-bottom: 5px;
      }
    
      .custom-button {
        width: 80%;
        position: absolute;
        top: 205px;
        display: none;
        opacity: 0.7;
        padding: 10px 10px;
        font-size: 20px;
        font-weight: bold;
    
        &:hover {
          background-color: #000;
          color: white;
        }
      }
    
      &:hover {
        .image {
          opacity: 0.8;
        }
    
        .custom-button {
          opacity: 0.85;
          display: block;
        }
      }
    }
    
    .collection-footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    
    // Overview & Preview
    .collection-overview {
      display: flex;
      flex-direction: column;
    }
    
    .collection-preview {
      display: flex;
      flex-direction: column;
      margin: auto auto 30px auto;
    
      .title {
        text-align: start;
        font-size: 20px;
        margin-bottom: 25px;
      }
    
      .preview {
        // display: flex;
        // justify-content: space-around;
        // flex-wrap: wrap;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
      }
    }
`

export default Wrapper;
