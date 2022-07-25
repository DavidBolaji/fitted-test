import styled from "styled-components";

const NavST = styled.div`
    display: flex;
    color: white;
    // justify-content: space-between;
    text-align: left;
    margin-top: ${(props) => props.mt};
    
    &active {
        background-color: white;
        color: black
    }
    
    img {
        width:${(props) => props.iw};
        margin-right: 30px;
        filter: inverse(0)
    }

    img.active {
        width:${(props) => props.iw};
        margin-right: 30px;
        background-color: black !important;
    }
`

const NavSTA = styled.div`
    display: flex;
    color: black;
    text-align: left;
    margin-top: ${(props) => props.mt};
    
    &active {
        background-color: white;
        color: black
    }
    
    img {
        width:${(props) => props.iw};
        margin-right: 30px;
        filter: inverse(0)
    }

    img.active {
        width:${(props) => props.iw};
        margin-right: 30px;
        background-color: black !important;
    }
`
const LinkCont = styled.div`
    display: flex;
    cursor: pointer;
    width: 90%;
   
    border: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: ${(props) => props.pd};

    &:hover {
        background-color: white;
        color: black
    }

    &:hover img {
        -webkit-filter: grayscale(1) invert(1);
        filter: grayscale(1) invert(1);
    }

`

const LinkContA = styled.div`
    display: flex;
    cursor: pointer;
    width: 90%;
    border: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: ${(props) => props.pd};
    background-color: white;
    color: black
   
`


const NavTS = ({ children, mt, pd, iw, className }) => {

    return (
        className ? <NavSTA mt={mt} iw={iw} className={className} >
            <LinkContA pd={pd}>{children}</LinkContA>
        </NavSTA> : <NavST mt={mt} iw={iw} className={className} >
            <LinkCont pd={pd}>{children}</LinkCont>
        </NavST>
    )
}

export default NavTS