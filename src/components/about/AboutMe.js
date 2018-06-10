import React from 'react';

const AboutMe = () => (
  <div style={{marginTop: '40px'}}>
    <h1>About me</h1>
    <p>
      {
        'Coding and teaching during the week, climbing in the weekend, lots of family in between!'
      }
    </p>
    <h3>{'Things I know(well, kind of...)'}:</h3>
    <p>{'react, redux, node, express, sequelize, mongo, python, d3'}</p>
    <h3>{'Things I am learning'}:</h3>
    <p>{'graphql, functional programming'}</p>
    <h3>{'Social'}</h3>
    <ul>
      <li>
        <a className="social-links" href="https://github.com/leogoesger/">
          {'Github: https://github.com/leogoesger/'}
        </a>
      </li>
      <li>
        <a className="social-links" href="https://www.linkedin.com/in/leo-qiu/">
          {'Linkedin: https://www.linkedin.com/in/leo-qiu/'}
        </a>
      </li>
      <li>
        <a className="social-links" href="https://twitter.com/leog0esger">
          {'Twitter: https://twitter.com/leog0esger'}
        </a>
      </li>
    </ul>
  </div>
);

export default AboutMe;
