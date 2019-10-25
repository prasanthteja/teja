// header.js
import React from 'react';
import Heading from './heading';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <Heading></Heading>
      </header>
    );
  }
});

export default Header;

// heading.js
import React from 'react';

const Heading = React.createClass({
  render() {
    return <h1 className="heading">Hello, world!</h1>;
  }
});

export default Heading;