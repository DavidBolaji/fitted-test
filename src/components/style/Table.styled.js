import styled from "styled-components";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useState } from "react";

const ContainerSC = styled.div`
    background-color: ${(props) => props.c};
    border-radius: 10px;
    padding: 10px;
    width: ${(props) => props.widths};
    margin: auto;
    margin-top: 70px;
    min-height: 325px;

    @media only screen and (max-width: 1024px) {
        overflow-y: scroll;
    }
` 

const ModalSC = styled.div`
    position: absolute;
    padding: 1em;
    background-color: #fff;
    white-space: nowrap;
    left: -40px;
    border-radius: 7px;
    z-index: 100;
    width: 200px;
    box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.2);

    div {
        padding: 5px;
        padding-left: 8px
    }
    
    div:hover {
        background-color: #F8F8F8;
        cursor:pointer;
        border-radius: 10px
    }
` 

const TableSC = styled.table`
    width: 95%;
    height: 2vh;
    overflow-y: scroll;
    thead {
        color: #8A9099;
        text-align: center;
        white-space: nowrap
    }
    th {
        border-bottom 1px solid #E8E9EB;
        padding:1em
    }

    tbody td:not(:first-child) {
        padding-left: 20px;
        white-space: nowrap
    }

    tbody tr:not(:last-child) {
        border-bottom 1px solid #E8E9EB
    }

    td {
        padding:1em
    }

    th {
        margin-right: 20px
    }

    thead span {
    display: inline-block;
    padding-left: 7px;
    transform: translateY(3px)
    }
`


export const ContainerTS = ({children, widths, c}) => {
  return <ContainerSC widths={widths} c={c}>{children}</ContainerSC>
}

export const TableTS = ({children, widths}) => {
    return <TableSC widths={widths} >{children}</TableSC>
}
  
export const Elepsis = ({onClick, modal}) => {
    console.log(modal);
    return <div style={{position: 'relative'}}><HiOutlineDotsVertical onClick={onClick}/>
    {modal && <div>
        <div>view more</div>
        <div>download receipt</div>
    </div>}
    </div>
}

export const ModalTS = () => {
    return <ModalSC>
        <div>View more</div>
        <div>Download receipt</div>
    </ModalSC>
}

