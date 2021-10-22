

import React, { Component } from "react";
import handleViewport from "react-in-viewport";
import ReactPlayer from "react-player";

class MySectionBlock extends Component {
  state = {
    shouldPlay: false,
  };
  getStyle() {
    const { inViewport, enterCount } = this.props;
    //Fade in only the first time we enter the viewport
    if (inViewport && enterCount === 1) {
      return { WebkitTransition: "opacity 0.75s ease-in-out" };
    } else if (!inViewport && enterCount < 1) {
      return { WebkitTransition: "none", opacity: "0" };
    } else {
      return {};
    }
  }

  handleEnterViewport = () => {
    this.setState({ shouldPlay: true });
  };
  handleExitViewport = () => {
    this.setState({ shouldPlay: false });
  };

  render() {
    const { enterCount, leaveCount } = this.props;
    return (
      <section>
        <ReactPlayer
          playing={enterCount === leaveCount ? false : true}
          {...this.props}
          url="https://www.youtube.com/watch?v=m75EZAy72bs"
          className="d-block width"
        />
      </section>
    );
  }
}
const MySection = handleViewport(MySectionBlock, { rootMargin: "-45.0%" });

export default MySection;
