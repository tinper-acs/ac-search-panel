import React from 'react';

class HeadContainer extends React.Component {
  render() {
    const { children, clsPrefix, className: _className } = this.props;
    const ht = children ? <div>{children}</div> : null;
    return (ht);
  }
}
export default HeadContainer;
