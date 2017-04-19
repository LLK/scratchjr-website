import React from 'react';
import {Section} from '../../../components/sectionitem/section.jsx';
import {StaticLinkSectionItem} from '../../../components/sectionitem/staticlinksectionitem.jsx';
import activities from './litmath.json';

export default class LiteracyMath extends React.Component {
    render () {
        return (
            <Section
                id="literacy-math-curriculum-section"
                title="Reinforcing Literacy and Math Curriculum"
                description="These curricular modules describe ScratchJr projects
                that reinforce literacy and math standards."
            >
                <div className="content-section-items-container">
                    {activities.map((activity, index) => (
                        <StaticLinkSectionItem
                            key={index}
                            format="half"
                            linkText="Read more"
                            {...activity}
                        />
                        ))}
                </div>
            </Section>
        );
    }
}
