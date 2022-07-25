import React, { useEffect, useState } from 'react'
import Notification from '../../assets/img/Union.png';
import { MdMenu } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { Layout } from 'antd';
import ProfileTS from '../style/profile.styled';
import NotificationTS from '../style/notification.styled';
const { Header } = Layout;

const Nav = () => {
    const [width, setWidth] = useState(window.screen.width)
    useEffect(() => {
        const resize = (e) => setWidth(window.screen.width);

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])

    return <Header
        className="site-layout-background"
        style={{
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '20px'
        }}
    >

        <ProfileTS mr={true} bg={'#fff'} bc={'#fff'} text={<BiArrowBack style={{ color: 'Black' }} />} color={'#fff'} />
        {/* <ProfileTS /> */}
        {/* <ProfileTS mr={true} bg={'#fff'} bc={'#fff'} text={'Vetted '} color={'#000'} x={'-200px'} y={'0px'} /> */}
        {width > 768 ? <>
            <NotificationTS icon={Notification} badgeCount={5} x={'-60px'} y={'0px'} />
            <ProfileTS bg={'blue'} bc={'aqua'} text={'SO'} color={"#fff"} />
        </> :
            <ProfileTS ml={true} bg={'#fff'} bc={'#fff'} text={<MdMenu />} color={"#000"} size={'20px'} />
        }

    </Header>
}

export default Nav