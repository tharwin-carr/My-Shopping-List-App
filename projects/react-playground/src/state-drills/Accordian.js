import React from 'react';

export default class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    };

    state = {
        activeSectionIndex: null,
    }

    handleSectionIndex = (sectionIndex) => {
        this.setState({activeSectionIndex: sectionIndex})
    }

    renderItem(section, idx, activeSectionIndex) {
        return (
                <li className= 'Accoridian-item' key={idx}>
                    <button type='button' onClick= {() => this.handleSectionIndex(idx)}>
                        {section.title}
                    </button>
                    {(activeSectionIndex === idx) && <p>
                        {section.content}
                    </p>}
                </li>
        )
    }

    render() {
        const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}