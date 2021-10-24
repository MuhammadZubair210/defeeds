import PropTypes from "prop-types";
import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./HomeBackground.css";

// list of items
const list = [
  {
    name:
      "https://images.unsplash.com/photo-1517856713891-215e57a13c0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
  },
  {
    name:
      "https://images.unsplash.com/photo-1515895309288-a3815ab7cf81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name:
      "https://images.unsplash.com/photo-1620892203642-1df9b16e2e36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
  },
  {
    name:
      "https://images.unsplash.com/photo-1620385017800-5c57740b445a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    name:
      "https://images.unsplash.com/photo-1597933731218-5debc7e2bca1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80",
  },
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div className={`menu-item ${selected ? "" : ""}`}>
      <img src={text} />
    </div>
  );
};

MenuItem.propTypes = {
  selected: PropTypes.any,
  text: PropTypes.any,
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return <MenuItem text={name} key={name} selected={selected} />;
  });

Menu.propTypes = {
  map: PropTypes.func,
};

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

Arrow.propTypes = {
  className: PropTypes.any,
  text: PropTypes.any,
};

const selected = "item1";

export default class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected,
  };

  onSelect = (key) => {
    console.log(key);
    this.setState({ selected: key });
    this.props.selectedFunc(key);
    this.props.background_selected(key);
  };

  render() {
    const { selected } = this.state;
    // console.log(selected)
    const menu = this.menuItems;
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          // arrowLeft={ArrowLeft}
          // arrowRight={RightArrow}
          RightArrow={RightArrow}
          LeftArrow={RightArrow}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

App.propTypes = {
  background_selected: PropTypes.func,
  selectedFunc: PropTypes.func,
};

function RightArrow() {
  return (
    <Arrow disabled={true} style={{ color: "black" }}>
      askdfjalsjdf
    </Arrow>
  );
}
