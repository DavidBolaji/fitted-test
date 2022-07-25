import styled from "styled-components";

const NotificationST = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    width: 20px;
    // transform: translate(-20px,0px);
    transform: translateX(${(props) => props.x}) translateY(${(props) => props.y});

    span {
        background-color: orange;
        width: 10px;
        height: 10px;
        padding: 0.75em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 10px;
        border-radius: 50%;
        transform: translate(5px,-5px);
    }
`



const NotificationTS = ({ badgeCount, icon, x, y }) => {
  return (
    <NotificationST x={x} y={y}>
      <span>{badgeCount}</span>
      <img src={icon} alt="badge" />
    </NotificationST>
  )
}

export default NotificationTS