import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import './Birth.css'
import 'react-responsive-tabs/styles.css'

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

  const labours = [
    {name: 'SIGNS OF EARLY LABOUR', biography:
    <div>
      <ul>
        <li>a blood-stained mucus discharge called a ‘show’</li>
        <li>lower back pain</li>
        <li>period-like pain that comes and goes</li>
        <li>loose bowel motions</li>
        <li>a sudden gush or a slow leak of ﬂuid from the vagina when your waters break or your membranes rupture. The ‘waters’ should be clear or slightly pink. (A greenish or bloody colour can indicate a problem with the baby and you will need to see a doctor or contact your hospital immediately)</li>
        <li>an urge to vomit (it is quite common to vomit during labour).</li>
      </ul>
    </div>
  },
    {name: 'WHAT IS EARLY LABOUR', biography:
    <div>
    <p>In early labour, your body is preparing for birth. Things you can do:</p>
      <ul>
        <li>stay at home for as long as you can</li>
        <li>have regular snacks so that you are building your energy reserves</li>
        <li>rest as much as possible; if it’s night time try and sleep</li>
        <li>try relaxing in a bath or a shower</li>
        <li>go to the toilet regularly and empty your bowels if you can.</li>
      </ul>
      <p>Eventually, towards the end of the first stage of labour, you will start feeling a little more restless and tired and your pain will become more intense. </p>
      <p>The pain will come like waves, starting small and building to a climax and then falling away again. </p>
      <p>As you move closer to second stage, the time between each wave will be smaller. When there is less than three to five minutes between each wave it is time to go to the hospital.</p>
    </div>
    },
    {name: 'WHEN TO GO TO HOSPITAL', biography:
    <div>
      <p>It’s not always clear whether labour has started. If you’re not sure or you are worried, call your hospital. </p>
      <p>Sometimes just the process of talking through your symptoms is enough to help you relax. Alternatively, during the course of the conversation, you and the midwife may decide it’s time to see a midwife.</p>
      <p>The midwife will ask you how and where you feel your contractions, how often the contractions come and how long they last. This will help them to know how much your labour has progressed.</p>
      <p>If there are strong signs of labour, such as your waters breaking, regular contractions or blood loss, it’s a good idea to contact the hospital anyway. </p>
      <p>If you are not in labour or if the labour is not yet established, depending on your situation, it is generally better to stay at home. Research has shown that women labour much better if they stay at home in the early stages.</p>
    </div>
    },
    {name: 'THE SECOND STAGE OF LABOUR', biography:
      <div>
        <p>Second stage describes the period of time from when the cervix is fully dilated to when the baby is born. </p>
        <p>In second stage you may have:</p>
        <ul>
          <li>longer and stronger contractions, with a one to two minute break in between</li>
          <li>increased pressure in your bottom</li>
          <li>the desire or urge to push</li>
          <li>shaky cramps, nausea and vomiting</li>
          <li>stretching and burning feelings in your vagina.</li>
        </ul>
        <h4>THINGS TO DO THROUGH SECOND STAGE</h4>
        <ul>
          <li>concentrate on your contractions and rest in between</li>
          <li>try to let go and allow your body to do what it needs to do</li>
          <li>try different positions – sitting, standing or walking</li>
          <li>if you feel hot, a cold face washer can be very soothing</li>
          <li>try a bath or shower to help you to relax and to manage the pain</li>
          <li>keep up your fluids and rest when you can.</li>
        </ul>
      </div>
    },
    {name: 'PUSHING', biography:
      <div>
        <p>When the urge to push arrives it can be overwhelming. </p>
        <p>The pushing phase varies for each woman but can last for up to two hours, usually less if you have had a baby before. </p>
        <p>Aside from the urge to push, you are likely to feel:</p>
        <ul>
          <li>pressure, and a strong urge to go to the toilet</li>
          <li>stretching and burning in your vagina</li>
          <li>the baby’s head moving down.</li>
        </ul>
        <p>The best thing you can do during this phase is to try and breathe deeply, relax and follow your body’s urge to push. </p>
        <p>Trust and listen to your midwife who will guide you.</p>
      </div>
    },
    {name: 'THE THIRD STAGE', biography:
    <div>
      <p>The third stage begins after your baby is born and finishes when the placenta and membranes have been delivered.</p>
      <p>In the third stage you may have: </p>
      <ul>
        <li>more contractions to expel the placenta</li>
        <li>a feeling of fullness in your vagina.</li>
      </ul>
      <p>The midwife will usually pull on the cord to deliver the placenta but may ask you to help by gently pushing.</p>
      <p>You should be able to cuddle with and breastfeed your baby immediately after birth.</p>
    </div>
  }
  ]
  function getTabs() {
    return labours.map(item => ({
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: item.name,
      getContent: () => item.biography,
    }));
  }

class Birth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div className="wrapper">
      <h1>Birth</h1>
      <p>Most women give birth between 38 and 42 weeks of pregnancy. If you have your baby before this time, your baby may need to be placed in the special care nursery or newborn intensive care centre (NICU) until for more specialised care.</p>
      <p>Some women will feel like they are having contractions from 34 weeks of pregnancy but most don’t go into labour until around 38 weeks.</p>
      <Tabs items={getTabs()} />
      <h2>RIGHT TO RESPECTFUL MATERNITY CARE</h2>
      <p>The midwife and any other medical staff who are present should communicate with you throughout your labour and birth.</p>
      <p>If you are unsure of anything that is happening to you have a right to ask them to stop and explain what is happening.</p>
      <p>You also have a right to decline care or to ask for more information before consenting to any procedure or intervention.</p>
      </div>
    )
  }
}
export default Birth
