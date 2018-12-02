import React, { Component } from 'react';
import { Landing, About, Social, Projects, Extra } from './reducer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      button: true,
      isTop: true,
      scrolled: false,
      // render: (
      //   <Landing
      //     renderA={this.compRenderA}
      //     renderS={this.compRenderS}
      //     renderP={this.compRenderP}
      //     renderE={this.comprenderE}
      //   />
      // ),
      render: <Projects />,

      // Development State
    };
  }

  // Navigation
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.sideNavCheckerF();
        this.navScroll();
      } else {
        this.sideNavChecker();
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScroll);
  }

  navScroll = () => {
    this.setState({ scrolled: true });
  };

  // Click Handlers
  clickHandler = () => {
    let state = this.state.button;
    this.setState({ button: !state });
  };

  compRender(compName, e) {
    this.setState({ render: compName });
  }

  // Sets to True
  sideNavChecker = () => {
    if (this.state.button === false) {
      this.setState({ button: true });
    }
  };

  // Sets to False
  sideNavCheckerF = () => {
    if (this.state.button === true) {
      this.setState({ button: false });
    }
  };

  setHome = () => {
    if (this.state.button === true) {
      this.setState({ button: false });
    }
    this.setState({
      render: (
        <Landing
          renderA={this.compRenderA}
          renderS={this.compRenderS}
          renderP={this.compRenderP}
          renderE={this.comprenderE}
        />
      ),
    });
  };

  // Really Cheap, refactor this!!

  compRenderA = () => {
    this.sideNavChecker();
    this.setState({ render: <About /> });
  };

  compRenderS = () => {
    this.sideNavChecker();
    this.setState({ render: <Social /> });
  };

  compRenderP = () => {
    this.sideNavChecker();
    this.setState({ render: <Projects /> });
  };

  compRenderE = () => {
    this.sideNavChecker();
    this.setState({ render: <Extra /> });
  };

  // I'm so sorry this exists ;-;

  render() {
    return (
      <div className="main_container">
        {/* Navigation */}
        <div
          className={this.state.scrolled ? 'navigation scrolled' : 'navigation'}
        >
          <div className="nav_head">
            <p onClick={this.clickHandler}>K/J</p>
          </div>
          <div className="nav_items">
            <p>Github</p>
            <p>LinkedIn</p>
            <p>Resume</p>
          </div>
        </div>

        {/* Rendered Component */}
        {this.state.render}

        {/* Left-Nav */}
        <div className={this.state.button ? 'smol_nav' : 'hidden_nav'}>
          <div className="smol_buttons">
            <p onClick={this.setHome}>Home</p>
            <p onClick={this.compRender.bind(this, <About />)}>About</p>
            <p onClick={this.compRender.bind(this, <Social />)}>Social</p>
            <p onClick={this.compRender.bind(this, <Projects />)}>Projects</p>
            <p onClick={this.compRender.bind(this, <Extra />)}>Extra</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
