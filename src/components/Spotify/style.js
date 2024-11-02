import styled from "styled-components";

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .spotyfy-body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,1));
        background-color: rgb(32, 87, 180);
    }
    .body {
        height: 100%;
        width: 100%;
        overflow: auto;
        &::-webkit-scrollbar{
                width: 0.7 rem;
                &-thumb{
                    background-color: rgba( 255, 255, 255, 0.6);
                }
            } 
    }
`;
export default Container;
