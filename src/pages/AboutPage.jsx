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
            <SkillsSection skill={'Javascript'} progress={'70%'} />
        </div>
    )
}

export default AboutPage;
