import styled from "styled-components"

export const cartaoContato = styled.div`
    display: grid;
    grid-template-columns: auto 15%;
    align-items: baseline;
    gap: 16px;
    width: 100%;
`

export const cartao = styled.div`
    border: solid 4px #ccc;
    border-radius: 8px;
    background-color: #5b5b5b;
    margin-bottom: 16px;
    width: 100%;

        ul {
            padding: 16px;
        }

            li {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                width: 100%;
                font-size: 16px;
            
                    textarea {
                    background-color: transparent;
                    border: none;
                    resize: none;
                    }
            }
`

export const botoes = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #5b5b5b;
  padding: 8px;
  border: solid 4px #ccc;
  border-radius: 8px;
  
    button {
      font-size: 16px;
      padding: 8px;
      cursor: pointer;
      border: none;
      border-radius: 8px;
    }

    .editar {
      background-color: darkblue;
    }

    .deletar {
      background-color: red;
    }

    .salvar {
      background-color: green;
    }

    .cancelar {
      background-color: orangered;
    }
`