import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
    color: whitesmoke;
    }
    
    body {
    background-color: #2c145f;
}
`

export default EstiloGlobal