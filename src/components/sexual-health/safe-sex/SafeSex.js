import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './SafeSex.css'

class SafeSex extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div>
        <h1>Safe Sex</h1>
        <p>Sex isn’t just penetrative vaginal sex. It can also include oral sex, anal sex and masturbation. 

Some people may even define sex as any sexual activity. 

When it comes to sex it’s important that you make sure that the sex you have is always done safely.</p>
        <h1>Consent</h1>
        <p>Consensual sex is when both parties are of legal age, agree to engage in sexual intercourse by choice, and have the freedom and capacity to make that choice. 

This means agreeing to sexual relations without fear, coercion, force or intimidation. Giving consent is active, not passive. 

It means freely choosing to say “yes” and also being free to change your mind at any time.
In Western Australia, the legal age for males and females to consent to sexual activity is 16 years. Having sex with someone under 16 years of age is a crime.
It is also a crime to have a sexual relationship with someone under 18 years where there is a relationship of authority; for example, a teacher with a student or an employer with an employee.
Regardless of age, if someone has been unable to give consent to sexual relations and they have taken place, it is a crime. People unable to give consent are those who are:
        </p>
        <ul>
          <li>unconscious</li>
          <li>asleep</li>
          <li>intoxicated</li>
          <li>drugged</li>
          <li>have a psychological or decision-making disability that impacts on their ability to understand what they are consenting to.</li>
        </ul>
        <h3>Websites</h3>
        <p><a href="">Relationships</a>, The Line</p>
        <p><a href="">Building respectiful relationships</a>, Kids Helpline</p>
        <h3>Fact sheets/booklets/videos</h3>
        <p><a href="">Relationships, families and friends</a>, Get the Facts</p>
        <p><a href="">Respect factsheets for young people</a>, SARC</p>
        <p>Safe sex means that you make sure your body fluids and your partner’s body fluids (semen, vaginal fluids and blood) don’t come into contact with each other’s bodies.
If you’re having sex, you can keep it safe by doing 2 things:
        </p>
        <ol>
          <li>Make sure that you always use a condom.</li>
          <li>Make sure you get tested for STIs regularly.</li>
        </ol>
        <p>Do these 2 things and you’re doing the best you can to protect yourself and your partners from sexually transmissible infections (STIs).
 
The safest way to have sex is to use condoms.  
 
Getting tested is quick, easy and painless. So do it often.

Getting tested for STIs should be part of your normal health check-up.  If you’re having sex and have never been tested for an STI, it’s a good idea to get tested now. 

If you’ve had sex with someone without a condom, or you’re experiencing any of the typical symptoms, you should see your doctor about testing. 
        </p>
        <h3>Condoms</h3>
        <p>
If you're having sex, condoms are the only form of protection that can help stop the transmission of STIs and at the same time prevent unplanned pregnancies. 

Some things to think about:
        </p>
        <ul>
          <li>You can’t tell if someone has an STI based on how they look, where they’re from or who they have slept with.</li>
          <li>Planning ahead and taking condoms with you, means you’ll not have to worry later.</li>
          <li>Think its awkward asking your partner to wear a condom? Imagine finding out you’ve got an STI…</li>
          <li>Using a condom provides you with peace of mind and lets you enjoy the process!</li>
          <li>Condoms can prevent you from catching HIV</li>
          <li>People with STIs often don’t know they’re infected, so protect yourself just in case.</li>
        </ul>
      </div>
    )
  }
}
export default SafeSex
