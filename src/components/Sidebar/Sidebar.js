import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { MdOutlineModeEdit } from "react-icons/md";
import { BsLink45Deg } from "react-icons/bs";
import './Sidebar.css'
import ProfileTS from '../style/profile.styled';
import DropdownM from '../Dropdown/Dropdown';
import Links from '../Links/Links';

const { Sider } = Layout;
const Sidebar = () => {
    const [width, setWidth] = useState(window.screen.width)
    useEffect(() => {
        const resize = (e) => setWidth(window.screen.width);

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return (
        width > 768 && <Sider style={{
            height: '100vh',
            background: 'linear-gradient(192.77deg, rgba(0, 240, 255, 0.8) -22.81%, rgba(83, 118, 255, 0.8) 28.04%, rgba(0, 12, 182, 0.8) 114.1%)',
            paddingTop: '30px',
            textAlign: 'center',
            color: '#fff'
        }}>
            <ProfileTS bg={'#000CB6'} color={'#fff'} bc={'white'} text={'SA'} ml={true} mr={true} size={'20px'} ow={'60px'} />
            <ProfileTS bg={'#fff'} color={'#fff'} bc={'white'} text={<MdOutlineModeEdit style={{ color: 'black' }} />} ml={true} mr={true} size={'20px'} ow={'35px'} x={'50px'} y={'-45px'} />

            <h3 style={{ color: '#fff', marginTop: '-20px' }}>Sikiru Agbaje</h3>
            <p>www.tailors.fitted.ng/sikiru</p>

            <ProfileTS
                text={<BsLink45Deg style={{ color: 'white' }} />}
                bg={'rgba(196, 196, 196, 0.26)'}
                ow={'20px'}
                x={'250px'}
                y={'-32px'}

            />

            <DropdownM />

            <Links />

        </Sider>
    )
}

export default Sidebar