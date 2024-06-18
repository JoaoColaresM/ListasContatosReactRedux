import styled from "styled-components";

export const adicionar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    h2 {
        margin-bottom: 16px;
        font-size: 32px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 8px;

        input, button {
            padding: 8px;
            background-color: #5b5b5b;
            border: none;
            border-radius: 4px;
        }

        button {
            background-color: green;
            padding: 16px;
            cursor: pointer;
        }
    }
`