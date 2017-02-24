import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Presentation from './Presentation';

class Conference extends React.Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render(){
        return(
      <Presentation
        children={this.props.children}/>
        );
    }
}

export default connect()(Conference);
