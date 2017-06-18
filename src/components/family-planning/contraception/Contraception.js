import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import './Contraception.css'
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

class Contraception extends Component {
  render() {
    return (
      <div>
      <h1>Contraception</h1>
      <p>There are many contraceptive methods available in Australia, including implants and injections, intrauterine devices (IUDs, both copper and hormonal), emergency contraception, pills and vaginal rings, barrier methods (male and female condoms and diaphragms), female and male sterilisation and natural methods (natural family planning).</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx8zbTMTncs" frameborder="0" allowfullscreen></iframe>
      <Tabs items={getTabs()} />
      </div>
    )
  }
}
export default Contraception
