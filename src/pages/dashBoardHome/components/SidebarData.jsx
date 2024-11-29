import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboardhome',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Hackathons',
        path: '/dashboardhackathon',
        icon: <AiIcons.AiFillBug />,
        cName: 'nav-text'
    },
    {
        title: 'Recrutamento',
        path: '/analisecurriculo',
        icon: <AiIcons.AiOutlineTeam />,
        cName: 'nav-text'
    },
]