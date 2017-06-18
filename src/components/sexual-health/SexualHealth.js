import React, { Component } from 'react';
import CardGrid from '../cardgrid/CardGrid';
import Card from '../card/Card';
import './SexualHealth.css'
import iconHIV from '../../images/icons/hiv-aids.png'
import iconSTI from '../../images/icons/sti.png'

class SexualHealth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Healthy Relationships"
          linkUrl="/sexual-health/healthy-relationships" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Safe sex"
          linkUrl="/sexual-health/safe-sex" />
        <Card
          imgSrc={iconSTI}
          titleText="STI's/ HIV"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Sexuality"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          titleText="Disability"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default SexualHealth
