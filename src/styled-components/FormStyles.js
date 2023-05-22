import styled, { css } from "styled-components";


const Wrapper = styled.section`
padding: 10px;
background:lightgray;
margin:10px;
border:1px solid peachpuff;
border-radius: 10px;
`
const Button = styled.button`

    font-size: 1.3em;
    color: white;
    background-color: blue;
    border: 2px solid blanchedalmond;
    padding: 10px 10px;
    border-radius: 15px;
    margin-top: 10px;
`
const MiniButton = styled.button`

    font-size: 1em;
    color: white;
    background-color: blue;
    border: 1px solid blanchedalmond;
    padding: 4px 4px;
    border-radius: 10px;
    margin-top: 30px;
`


const SelectorV = styled.select`
        
        width:100%;
        background:'#FFF';
        border-radius: 4px;
        height: 35px;
        line-height: 35px;
        padding: 0 20px 0 10px; 
    
    `
const LabelF = styled.label`
    font-weight: bold;
    
    margin-top: 5px;
    margin-bottom: 12px;
    `

export {
    Wrapper,
    Button,
    SelectorV,
    LabelF,
    MiniButton,
}
