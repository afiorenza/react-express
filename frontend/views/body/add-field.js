import React, {Component} from 'react';

export class AddField extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {}
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="key">
          <span>Key</span>
          <input type="text" name="key" onChange={e => this.handleChange(e, 'key')} />
        </label>

        <label htmlFor="type">
          <span>Type</span>
          <input type="text" name="type" onChange={e => this.handleChange(e, 'type')} />
        </label>

        <label htmlFor="title">
          <span>Title</span>
          <input type="text" name="title" onChange={e => this.handleChange(e, 'title')} />
        </label>

        <label htmlFor="defaultValue">
          <span>Default value</span>
          <input type="text" name="defaultValue" onChange={e => this.handleChange(e, 'defaultValue')} />
        </label>

        <button onClick={e => this.handleSubmit()}>Submit</button>
      </div>
    );
  }

  handleChange(e, name) {
    let form = Object.assign({}, this.state.form, {
      [name]: e.target.value
    });

    this.setState({form});
  }

  handleSubmit() {
    fetch('/add-field', {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(({success, data}) => {
      if (success)
        this.props.onFormFetch(data);
    });
  }
}

export default AddField;