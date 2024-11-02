import styled from "styled-components";

const Container = styled.div`
    background: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    .top-link {
        display: flex;
        flex-direction: column;
        
        .logo {
            text-align: center;
            margin: 1rem;
            
            img {
                max-width: 80%;
                height: auto;    
            }
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem; /* Giữ padding cho ul để tạo không gian cho danh sách */

            li {
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;

                &:hover {
                    color: white;
                }
            }
        }
    }
    
    img {
        height: 50vh;
        width: auto;  
    }
`;

export default Container;
