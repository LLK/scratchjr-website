import React from 'react';
import {Section} from '../../../components/sectionitem/section.jsx';
import {StaticLinkSectionItem} from '../../../components/sectionitem/staticlinksectionitem.jsx';
import activities from './playground.json';

export default class Playground extends React.Component {
    render () {
        return (
            <Section
                id="playground-curriculum-section"
                title="Playground Curriculum"
            >
                <div className="content-section-description">
                    This curriculum provides an introduction to ScratchJr by re-creating
                    familiar children&apos;s games using the ScratchJr characters and programming blocks.
                    <a href="curricula/playground/playground-games-full.pdf">
                        [Download all lessons as one file]
                    </a>
                </div>
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
