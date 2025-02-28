import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eeeeee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 220px;
    margin: 80px auto;
    background: #FFFFFF;
    padding-top: 50px ;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777777;
    box-sizing: border-box;
`;


export const Button = styled.div`
    width: 200px;
    height: 30px;
    line-height: 30px;
    color: #FFFFFF;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`;