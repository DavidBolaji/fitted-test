import styled from "styled-components";

const CardST = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  width:70%;
  max-width: 900px;
  box-shadow: 2px -40px 5px 10px rgba(0,0,185,0.2);
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;

  @media only screen and (max-width: 1400px) {
    transform: scale(0.7);
    width:90%;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    box-shadow: none;
    margin-top: 10px;
    min-width: 300px;
  }
`
const CardDetailST = styled.div`
 display: flex;
 border-radius: 10px;
 align-items: center;

 img {
  margin: 20px;
  transform : translateY(-50px);
  background-color: white;
  border-radius: 20px;
  border: 10px solid white;
 }

 @media only screen and (max-width: 1200px) {
  margin: auto;
}

@media only screen and (max-width: 768px) {
  flex-direction:column;

  img {
    transform : translateY(5px);
  }
}
`

const InfoST = styled.div`
 width: 230px;
 border-right: 2px solid #ededed;

 @media only screen and (max-width: 1200px) {
  border-right: none;
}

@media only screen and (max-width: 768px) {
  margin-bottom: 20px;
}
`

const CardInfoST = styled.div`
  display: flex;
  font-size: 12px;

  h4 {
    width: 6rem;
  }

  div {
    font-weight: 700;
  }
`

const CardTwoST = styled.div`
 display: flex;
 max-width: 600px;
 width:60%;
 margin: auto;
 justify-content: space-evenly;
 align-items: center;

 @media only screen and (max-width: 1200px) {
  padding-bottom: 2em;
  width: 100%;
}

@media only screen and (max-width: 768px) {
 flex-direction: column;
 width: 70%;
  margin-bottom: 20px;
}
`

const CardMobileST = styled.div`
  display: flex;
  img {
    width: 40px;
  }

  @media only screen and (max-width: 768px) {
    width: 110%;
    max-width: 300px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    img {
      margin-right: -10px;
      width:40px;
      transform: scale(0.5);
    }
  }
`

const CardMobileDetailST = styled.div`
  margin-left: 10px;
  font-size: 12px;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;

    h3 {
      // width: 300px;
      font-size: 12px;
      margin-right: 10px;
      flex: 1;
      white-space: nowrap;
    } 

    p {
      white-space: nowrap;
      margin-top: 7px;
      flex: 1;
    }
  }
  
`

export const CardTS = ({ children }) => {
  return (
    <CardST>{children}</CardST>
  )
}

export const CardDetailTS = ({ children }) => {
  return (
    <CardDetailST>{children}</CardDetailST>
  )
}


export const InfoTS = ({ children }) => {
  return (
    <InfoST>{children}</InfoST>
  )
}

export const CardInfoTS = ({ children }) => {
  return (
    <CardInfoST>{children}</CardInfoST>
  )
}

export const CardTwo = ({ children }) => {
  return (
    <CardTwoST>{children}</CardTwoST>
  )
}

export const CardMobile = ({ children }) => {
  return (
    <CardMobileST>{children}</CardMobileST>
  )
}

export const CardMobileDetail = ({ children }) => {
  return (
    <CardMobileDetailST>{children}</CardMobileDetailST>
  )
}


