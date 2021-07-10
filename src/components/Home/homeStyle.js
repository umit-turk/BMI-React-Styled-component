import styled from "styled-components";

export const Container = styled.div`
display: flex;
@media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
    
    form {
        display: inline-block;
        flex-direction: column;
        margin-left: 50px;
        margin-top: 50px;
        @media (max-width: 768px) {
            font-size: 14px;
            
        }
        label {
            margin-right: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
            display: grid;
            font-weight: bold;
        }
        input {
            border-radius: 10px;
            border: none;
            height: 25px;
            padding-left: 10px;
        }
        input:focus{
            outline: none;
        }
        button {
            width: 100px;
            margin-left: 47px;
            margin-top: 30px;
            border: none;
            outline: none;
            background: #333;
            height: 25px;
            border-radius: 10px;
            color: #ddd;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
        }
        button:hover{
            color: #333;
            background: #ddd;
            font-weight: bold;
        }
    }
    span{
        color: red;
        margin-left: 10px;
        font-weight: bold;
    }
   .results {
       border: 1px solid #333;
       width: 150px;
       border-radius: 10px;
       display: flex;
       flex-direction: column;
       margin-top: 20px;
   }
   
   
    
`