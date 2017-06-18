import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import './Pregnancy.css'
import 'react-responsive-tabs/styles.css'

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

  const contraceptions = [
    {name: 'Male Condom', biography: '1Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
    {name: 'Female Condom', biography: '2Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
    {name: 'The Pill', biography: '3Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
  ]
  function getTabs() {
    return contraceptions.map(item => ({
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: item.name,
      getContent: () => item.biography,
    }));
  }

class Pregnancy extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div className="wrapper">
      <h1>CARE DURING PREGNANCY</h1>
      <p>Pregnancy can be both an exciting and stressful time for women and their families.</p>
      <p>Understanding what to expect helps reduce anxiety and fear surrounding childbirth and motherhood.</p>
      <p>It is also essential to monitor potential risk factors as this can alert both mother and health care work to take action should these risks present</p>
      <p>Ideally, antenatal care should be provided by a small group of healthcare professionals with whom the woman feels comfortable.</p>
      <p>A system of clear referral paths should be established so that pregnant women who require additional care are managed and treated by the appropriate specialist teams when problems are identified.</p>
      <p>Below is a list of the appointments you are expected to attend during your pregnancy</p>
      </div>
    )
  }
}
export default Pregnancy
