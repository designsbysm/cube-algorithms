import React from "react";
import { Link, withRouter } from "react-router-dom";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/pro-regular-svg-icons";

class Dropdown extends React.Component {
  state = {
    dropdownVisible: false,
  };

  getSubItems = (methods, group, hideMenu) => {
    return methods
      .filter(method => method.group === group)
      .map(method => (
        <li className="nav-subitem" key={method.key} onClick={hideMenu}>
          <Link to={method.key}>{method.name}</Link>
        </li>
      ));
  };

  handleMenuHide = () => {
    this.setState(() => {
      return {
        dropdownVisible: false,
      };
    });
  };

  handleMenuShow = () => {
    this.setState(() => {
      return {
        dropdownVisible: true,
      };
    });
  };

  handleMenuToggle = () => {
    this.setState(state => {
      return {
        dropdownVisible: !state.dropdownVisible,
      };
    });
  };

  render() {
    return (
      <div
        className="nav-item"
        onClick={this.handleMenuToggle}
        onMouseEnter={this.handleMenuShow}
        onMouseLeave={this.handleMenuHide}
      >
        <div className="title">
          {this.props.title}
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul className={`dropdown ${this.state.dropdownVisible ? "show" : "hide"}`}>
          {[
            "2x2",
            "3x3",
            "Other", 
          ].map(group => [
            <li className="nav-subitem group" key={group}>
              {group}
            </li>,
            this.getSubItems(this.props.methods, group, this.handleMenuHide),
          ])}
        </ul>
      </div>
    );
  }
}

const Logo = ({ image }) => (
  <Link to="/">
    <img className="logo" src={image} alt="SM Logo" />
  </Link>
);

class Nav extends React.Component {
  title = (methods, url) =>
    methods
      .filter(method => url === `/${method.key}`)
      .map(method => method.name)
      .slice(0, 1)
      .reduce((accumulator, currentValue) => currentValue, "Unknown");

  render() {
    const title = this.title(this.props.methods, this.props.url);

    return (
      <nav>
        <Dropdown title={title} methods={this.props.methods} />
      </nav>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo image={this.props.logo} />
        <Nav methods={this.props.methods} url={this.props.location.pathname} />
      </header>
    );
  }
}

export default withRouter(Header);
