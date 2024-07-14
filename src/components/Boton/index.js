import styled from "styled-components"

const BotonEstilizado = styled.button`
    width: 180px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    background: none;
    border: 2px solid;
    cursor: pointer;
    &.active {
        color: blue;
        border-color: blue;
        box-shadow: inset 0 0 5px blue;
    }
    &.inactive {
        color: white;
        border-color: white;
    }
`

function Boton({ text }) {
    return (
        <BotonEstilizado>
            {text}
        </BotonEstilizado>
    )
}

export default Boton
