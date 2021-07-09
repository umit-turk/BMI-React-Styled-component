import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background: #333;
  height: 100px;
  align-items: center;
  width: 100%;
  max-width: 100%;
  
  a {
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    color: #ddd;
    font-size: 20px;
    @media (max-width: 768px){
      
          font-size: 16px ;
      
  }

  }
  a:hover {
    color: #FFBCBC;
  }
  
`;
export const Logo = styled.div`

 
`;
