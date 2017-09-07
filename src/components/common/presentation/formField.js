import React from 'react';

export const required = (value, allValues, props) => {
  console.log("required");
  return (value ? undefined : 'Required')
}
export const email = (value, allValues, props) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined

export const passwordCheck = (value, allValues, props) => {
  if (value) {
    let eight_chars = (new RegExp("^(?=.{8,})")).test(value);
    let oneUpper = (new RegExp("^(?=.*[A-Z])")).test(value);
    let oneLower = (new RegExp("^(?=.*[a-z])")).test(value);
    let oneNumber = (new RegExp("^(?=.*[0-9])")).test(value);

    if (!eight_chars) {
      return 'Password must be eight characters or longer.'
    }
    if (!oneUpper) {
      return 'Password must contain one uppcase character.'
    }
    if (!oneLower) {
      return 'Password must contain one lowecase character'
    }
    if (!oneNumber) {
      return 'Password must contain one number'
    }
  }

  return undefined;
}

export const passwordVerify = (value, allValues, props) => {
  if (value) {
    console.log(allValues);
    console.log(value + " === " + allValues.password);
    if (value !== allValues.password) {
      return "Passwords do not match"
    }
  }
  return undefined;
}

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined
//export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined const maxLength15 = maxLength(15)
// export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
// export const minLength2 = minLength(2)


export const RenderField = ({ input, placeholder, type, icon, tooltip,
  meta: { visited, touched, error, warning }
}) => {
  let iconClass = "icon-append fa " + icon;

  if (visited && touched && error) {
    return (
      <div>
        <label className="input state-error">
          <i className={iconClass} />
          <input {...input} placeholder={placeholder} type={type} />
          <b className="tooltip tooltip-bottom-right">{tooltip}</b>
        </label>
        {touched && (error && <div className="note note-error">{error} </div>)}
      </div>);
  }

  if (visited && !error) {
    return (
      <div>
        <label className="input  state-success">
          <i className={iconClass} />
          <input {...input} placeholder={placeholder} type={type} />
          <b className="tooltip tooltip-bottom-right">{tooltip}</b>
        </label>
      </div>);
  }

  return (
    <div>
      <label className="input">
        <i className={iconClass} />
        <input {...input} placeholder={placeholder} type={type} />
        <b className="tooltip tooltip-bottom-right">{tooltip}</b>
      </label>
    </div>);
}
