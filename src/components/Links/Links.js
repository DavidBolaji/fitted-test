import React from 'react';
import { navs } from '../../Data/Data';
import NavTS from '../style/nav.styled';

const renderNavLinks = navs.map((nav, id) => {
    return nav.text === "My Profile" ?
        <NavTS key={id} className={'active'} mt={'0px'} pd={'20px 0 20px 60px'} iw={'20px'}>
            <div >
                <img src={nav.logo} alt={nav.text} />
            </div>
            <div>
                {nav.text}
            </div>
        </NavTS> :
        <NavTS key={id} mt={'0px'} pd={'20px 0 20px 60px'} iw={'20px'} >
            <div >
                <img src={nav.logo} alt={nav.text} />
            </div>
            <div>
                {nav.text}
            </div>
        </NavTS>
})

const Links = () => {
    return renderNavLinks;
}

export default Links