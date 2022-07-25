import styled from "styled-components";

const Profile = styled.div`
    margin-left:${(props) => props.ml && 'auto'};
    margin-right:${(props) => props.mr && 'auto'};
    background-color: ${(props) => props.bg};
    border: 1px solid ${(props) => props.bc};
    display: flex;
    align-items: center;
    justify-content: center;
    width:  ${(props) => props.ow ? props.ow : '40px'};
    height: ${(props) => props.ow ? props.ow : '40px'};
    border-radius: 50%;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    transform: translateX(${(props) => props.x}) translateY(${(props) => props.y});
`

const ProfileTS = ({ bg, bc, color, text, ml, mr, size, ow, x, y }) => {
  return (
    <Profile x={x} y={y} ow={ow} size={size} ml={ml} mr={mr} bg={bg} bc={bc} color={color}>{text}</Profile>
  )
}

export default ProfileTS