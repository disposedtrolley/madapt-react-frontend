import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import { Accordian, Panel } from 'react-bootstrap'
import './Contraception.css'
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css'


class Contraception extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: 'Hormonal Implants', info: 'Implants are small, flexible rods or capsules placed under the skin of the upper arm. They contain a progestogen-only hormone which helps thicken cervical mucous and blocks the sperm and egg from meeting and prevents ovulation. They are effective in preventing pregnancy in over 99% of cases but do not protect against sexually transmitted infections or HIV. For this you need to use condoms. Hormonal implants need to be inserted by a trained professional and can be used for 3-5 years depending on the brand. A small percentage of women will experience irregular bleeding but many will stop having periods altogether. •	Once the implant is removed or expires, you can get pregnant immediately.'},
        {name: 'Where to access?', info: 'Find a family planning service provider to discuss your options.  More Info https://www.thewomens.org.au/health-information/contraception/contraceptive-implants/ http://www.arhp.org/publications-and-resources/patient-resources/fact-sheets/single-rod https://www.plannedparenthood.org/learn/birth-control/birth-control-implant-implanon'},
      ]
    } 
    this.getTabs = this.getTabs.bind(this)
  }

  componentDidMount() {
    window.analytics.page();
  }

  getTabs() {
    return this.state.data.map(item => ({
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: item.name,
      getContent: () => item.info,
    }));
  }

  render() {
    return (
      <div className="wrapper">
      <h1>Contraception</h1>
        <div className="content">
          <p>There are many contraceptive methods available in Australia, including implants and injections, intrauterine devices (IUDs, both copper and hormonal), emergency contraception, pills and vaginal rings, barrier methods (male and female condoms and diaphragms), female and male sterilisation and natural methods (natural family planning).</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx8zbTMTncs" frameBorder="0" allowFullScreen></iframe>
        </div>
        <Tabs items={this.getTabs()} />
      </div>
    )
  }
}

export default Contraception