import React from 'react';
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form';
import {FileField} from '../common/presentation/formField'

export default class UploadFileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {file: ''};    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {  
    event.preventDefault();

    this.props.handleSubmit(this.state);
  }
  handleChange(event) {
    this.setState({file: event.target.files[0]});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="smart-form client-form">
        <fieldset>
          <div className="row">
            <section className="col col-12">
              <label className="input">
                <label >Choose file to upload</label>
                <input
                  onChange={this.handleChange}                             
                  type='file'/> {/*<Field name="file" component={FileField}/>*/}
              </label>
            </section>
          </div>

          <div className="row">
            <section className="col col-6">
              <button type="submit" className="btn btn-success btn-xs">
                <i className="fa fa-check"></i>
                Confirm
              </button>
              &nbsp;
              <button onClick={this.props.onCancel} className="btn btn-danger btn-xs">
                <i className="fa fa-ban"></i>
                Cancel
              </button>
            </section>
          </div>
        </fieldset>
      </form>
    );
  }
}

UploadFileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

/*
export default reduxForm({
  form: 'UploadFileForm' // a unique identifier for this form
})(UploadFileForm)
*/