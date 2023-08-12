import {BsFillPersonLinesFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';


const NavData =[

    {
        icon:<AiFillLinkedin size={30}/>,
        title:'LinkedIn',
        bg:'#4299e1',
        link:'https://www.linkedin.com/in/daniel-fab-ola-938030263/'
    },
    
    {
        icon:<AiFillGithub size={30}/>,
        title:'Github',
        bg:'#333333',
        link:'https://github.com/danFabCode'
    },
    
    {
        icon:<AiOutlineMail size={30}/>,
        title:'Email',
        bg:'#6fc2b0',
        link:''
    },
    
    {
        icon:<BsFillPersonLinesFill size={30}/>,
        title:'Resume',
        bg:'#565f69',
        link:''
    }
]


export default NavData;