import styled from 'styled-components';

const Wrapper = styled.div`
  .collection-overview {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .collection-preview {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .collection-preview .title {
    font-size: 20px;
    margin-bottom: 25px;
  }

  .collection-preview .preview {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [4];
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }
`;

export default Wrapper;
