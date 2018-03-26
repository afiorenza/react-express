require('./_body.scss');

import React, {Component} from 'react';
import Form from 'react-jsonschema-form';
import {omit} from 'lodash';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schema: {}
    };
  }

  componentWillMount() {
    fetch('/forms')
      .then(response => response.json())
      .then(({data}) => {
        if (data) {
          this.setState({
            schema: omit(data, ['_id', '_v'])
          })
        }
      });
  }

  render() {
    let {message, schema} = this.state;

    return (
      <div>
        <Form 
          schema={schema}
          onSubmit={e => this.onSubmit(e)}
        />
        <br />
        {message && <p>{message}</p>}
      </div>
    );
  }

  onSubmit({formData}) {
    fetch('/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.schema.name,
        formData
      })
    })
    .then(response => response.json())
    .then(({success, message}) => {
      this.setState({
        message
      });
    });
  }
}

export default Body;
