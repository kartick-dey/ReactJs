import React from 'react';
import './Input.css'

const input = (props) => {
  let inputElement = null;
  let classes = [];
  classes.push("InputElement");
  if (props.invalid && props.shouldValidate && props.touched) {
    classes.push("Invalid")
  }
  switch (props.elementType) {
    case ('input'):
          inputElement = <input className={classes.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
          break;
    case ('textarea'):
          inputElement = <textarea className={classes.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
          break;
    case ('select'):
          inputElement = (<select className={classes.join(' ')} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
          </select>);
          break;
    default:
          inputElement = <input onChange={props.changed} className={classes.join(' ')} {...props.elementConfig} value={props.value} />
  }
  return (
    <div className="Input">
        <label className="Label">{props.label}</label>
        {inputElement}
    </div>
  );
};

export default input;
