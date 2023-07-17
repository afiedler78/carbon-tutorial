import React, { Component } from 'react';
import './app.scss';
import { Button } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import Helper from './content/Helper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/helper" component={Helper} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;
