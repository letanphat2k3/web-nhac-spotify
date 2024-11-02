import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center; 
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #1ED760; 
    gap: 5rem;

    img {
        height: 50vh;
    }
    
    button {
        padding: 1rem 5rem; 
        border-radius: 5rem;
        border: none;
        background-color: black;
        color: #49f585;
        font-size: 1.4rem;
    }
`;

export default Container;
