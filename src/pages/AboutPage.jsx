import React from 'react'
import Title from '../components/title'
import ImageSection from '../components/ImageSection'
import SkillsSection from '../components/SkillsSection'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={`About Me`} span={`About Me`} />
            <ImageSection />
            <Title title={`My Skills`} span={`My Skills`} />
            <div className="skills-container">
                <SkillsSection skill={'Javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Typescript'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'20%'} width={'20%'} />  
                <SkillsSection skill={'HTML'} progress={'10%'} width={'10%'} />
                <SkillsSection skill={'CSS'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'GitHub'} progress={'60%'} width={'60%'} />
            </div>
        </div>
    )
}

export default AboutPage;
