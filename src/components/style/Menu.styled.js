import styled from "styled-components";

const MenuM = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    margin-bottom: 3em;

    div:after {
        content: '';
        margin-top: 0.5em;
        width: 70px;
        height: 3px;
        background: red;
        display: block;
    }

    @media only screen and (max-width: 768px) {
        // font-size: 8px;
        margin-top: -30px;

        div:nth-child(3) {
            display:none;
        }
    } 
`

export const MenuST = () => {
    return <MenuM>
        <div>Transaction History</div>
        <div>Billing Address</div>
        <div>Account Setting</div>
    </MenuM>
}