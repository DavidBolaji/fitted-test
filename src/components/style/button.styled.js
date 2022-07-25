import styled from "styled-components";

const ButtonST = styled.button`
    padding: 1em;
    background-color: ${(props) => props.bg ? !props.valid ? 'blue' : props.bg : 'transparent'};
    color: ${(props) => props.bg ? '#fff' : 'pink'};
    border: ${(props) => props.bg ? 'none' : '1px solid #ededed'};
    border-radius: 7px;
    cursor: ${(props) => props.valid ? 'not-allowed' : 'pointer'};
`


const ButtonTS = ({ children, bg, onClick, disabled, style }) => {
    return (
        <ButtonST style={style} valid={disabled} onClick={onClick} bg={bg}>{children}</ButtonST>
    )
}

export default ButtonTS