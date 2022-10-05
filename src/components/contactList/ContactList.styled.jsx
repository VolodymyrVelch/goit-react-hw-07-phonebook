import styled from 'styled-components';

export const ContactField= styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #FAfafa;
    padding:20px;
    width: 460px;
    margin-top:10px;
    border-radius: 4px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Contact = styled.p`
    display: flex;
    margin: 0;
    align-items: center;
    color: #030C24 ;
    font-weight: 700;
    font-size: large;
`;

export const Number = styled.p`
    display: block;
    font-weight: 700;
    font-size: medium;
    margin: 0;
    color: #1651B8 ;
`;

export const Button = styled.button`
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    width: 60px;
    border: 1px solid gray;
    border-radius: 10px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   &:hover,
   :focus{
     background-color: #DF2914;
     color:#FAFAF8;
      transition: all 300ms ease;
   }
`