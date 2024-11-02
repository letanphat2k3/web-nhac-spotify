import styled from "styled-components";

const Container = styled.div`
    .track {
        display: flex;
        align-items: center;
        gap: 1rem;
        &__info {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            h4 {
                color: white;
            }
            h6 {
                color: #b3b3b3;
            }
        }
    }
`

export default Container