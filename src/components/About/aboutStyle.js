import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

   h2, h3, p, ul, li, img {
    max-width: 75ch;
    padding: 0 1em;
    margin: 1em 0 0 0;
  }
  h1, h2, h3{
      line-height: 1.1;
      color: #000;
  }
  li {
      list-style: none;
  }
  p {
    font-size: 1.25rem;
  }
  img {
      width: 90%;
  }
`;
