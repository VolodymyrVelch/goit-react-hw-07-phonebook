import { Form, Field , ErrorMessage} from 'formik';
import styled from "styled-components";

export const MainForm = styled(Form)`
    display: flex;
    flex-direction: column;
    padding:20px;
    width: 500px;
    margin-left:auto;
    margin-right: auto;
    border-radius: 4px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

export const Lable = styled.label`
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: space-between;
    color: #1651B8;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  
  `

export const InputField = styled(Field)`
    padding: 10px;
    margin-left: 10px;
    border-radius: 10px;
    border: 1px solid black;
    outline: none;
    width: 340px;
     background-color: #F6F4F2;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: medium;
    color: #1651B8 ;
    transition: all 300ms ease;
    
  :hover,
  :focus {
    border-color: gray;
    transition: all 300ms ease;
  }
`
export const ErrorMess = styled(ErrorMessage)`
    margin: 5px;
    color: #F45707;
    font-style: italic;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: left;
`
export const Button = styled.button`
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    font-weight: bold;
 
    width: 100px;
    border: 1px solid gray;
    border-radius: 10px;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;   &:hover,
   :focus{
     background-color: #F45707;
     color:#FAFAF8;
      transition: all 300ms ease;
   }
`

