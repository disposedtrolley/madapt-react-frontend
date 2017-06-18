import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import './HealthSystemOverview.css'
import 'react-responsive-tabs/styles.css'


class HealthSystemOverview extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div className="wrapper">
        <h1>HealthSystemOverview</h1>
        <p>Australia has universal healthcare access. </p>
        <p>This means Australian citizens and visitors who are eligible for Medicare benefits are entitled to free or subsidised health care at public hospitals and with certain doctors, known as general practitioners or GPs.</p>
      </div>
    )
  }
}
export default HealthSystemOverview
