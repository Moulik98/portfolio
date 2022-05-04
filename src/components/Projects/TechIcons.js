import React from 'react';
import { DiReact, DiFirebase,DiMongodb, DiCss3, DiJavascript, DiWindows, DiJava  } from 'react-icons/di';
import {FaNode, FaNodeJs} from 'react-icons/fa'
import {FcLinux} from 'react-icons/fc'
import { SiRedux, SiJson, SiHtml5, SiVisualstudiocode, SiJavascript } from 'react-icons/si';


const TechIcons = ({tag}) => {
    if(tag === 'HTML')
    return <SiHtml5 size = '35%' color = "#9cc9e3"/>
    else if(tag === 'Firebase')
        return <DiFirebase size = '35%' color='#9cc9e3'/>
    else if(tag === 'Mongodb')
        return <DiMongodb size = '35%' color = '#9cc9e3'/>
    else if(tag === 'Node')
        return <FaNode size = '35%' color = '#9cc9e3'/>
    else if(tag === 'CSS')
        return <DiCss3 size = '35%'  color = "#9cc9e3"/>
    else if(tag === 'JavaScript')
        return <SiJavascript size = '35%' color = '#9cc9e3'/>
    else if(tag === 'JSON')
        return <SiJson size = '35%' color = '#9cc9e3'/>
    else if (tag === 'React')
    return <DiReact size = '35%' color = '#9cc9e3' />  
    else if(tag === 'Redux')
        return <SiRedux size = '35%' color = '#9cc9e3'/> 
    // else if(tag === 'Linux')
    //     return <FcLinux size = '35%'/>
    // else if(tag === 'Windows')
    //     return <DiWindows size = '35%'/>
    else if(tag === 'VS code')
        return <SiVisualstudiocode size = '35%' color = '#9cc9e3'/>
    else if(tag === 'Java')
        return <DiJava size = '35%' color = '#9cc9e3'/>
    else if(tag === 'ExpressJS')
        return <FaNodeJs size = '35%' color = '#9cc9e3'/>
    return <SiRedux size = '35%' color = '#9cc9e3'/>
    
   
}
export default TechIcons;