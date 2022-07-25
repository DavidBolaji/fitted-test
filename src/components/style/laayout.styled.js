import styled from "styled-components";

const RowST = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
      }
`

const ColST = styled.div`
    flex: 0.5;
    width: 100%;
    background-c: purple;

    @media only screen and (max-width: 768px) {
        flex: 1;
      }
`


export const RowTS = ({ children, style }) => {
    return (
        <RowST style={style}>{children}</RowST>
    )
}

export const ColTS = ({ children, style }) => {
    return (
        <ColST style={style}>{children}</ColST>
    )
}