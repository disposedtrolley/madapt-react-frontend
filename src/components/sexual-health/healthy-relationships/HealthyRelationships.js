import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './HealthyRelationships.css'

class HealthyRelationships extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div>
        <h1>Healthy Relationships</h1>
        <p>Most people’s lives are primarily defined by the relationships they have - personal and occupational, social, formal and informal, close and intimate or acquaintances. 

Relationships can be between people from different countries, different cultures, the opposite sex or the same sex. 

They can be can be long-term and last a lifetime, or they can be short-term.  

Healthy relationships are often referred to as being ‘respectful relationships’ or ‘ethical relationships’ or even a ‘good relationship’. 

No matter what type of relationship it is - family, friends, work mates, sporting partners, neighbours, fellow students, teachers, acquaintances, boyfriends, girlfriends -  a respectful relationship typically exhibits characteristics of:
        </p>
        <ul>
          <li>Respect - mutual feelings of regard; sense of feeling affirmed and safe</li>
          <li>Communication - really listening, hearing and being heard; understanding; being able to say no</li>
          <li>Trust – feeling trust and being trusted</li>
          <li>Equality – freely making your own choices</li>
        </ul>

        <p>Professional or formal relationships are often guided by codes of conduct but in the personal and social realm there is a wide variety of approaches to relationships.
        </p>
      </div>
    )
  }
}
export default HealthyRelationships
