import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Template } from '../Template';
import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

class Component extends React.Component {
  static displayName = 'Header';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.any,
    children: PropTypes.any
  };

  render () {
    const { theme, classes, className, children, ...etc } = this.props;

    return (
      <Template {...etc}>
        <div className={cx(classes.root, className)}>
          <Header className={classes.header} />
          <Main className={classes.main}>
            {children}
          </Main>
          <Footer className={classes.footer} />
        </div>
      </Template>
    );
  }
}

export { Component };
