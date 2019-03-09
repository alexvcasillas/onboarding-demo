import React from 'react';
import styles from './input-text.module.scss';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }

  handleOnChange = e => {
    const { onChange } = this.props;
    this.setState({ value: e.target.value });
    onChange(e.target.value);
  };

  render() {
    const { type, placeholder, onKeyPress, onFocus, onBlur, error, valid } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.c_input} data-has-content={value !== ''} data-is-valid={valid}>
        <input
          type={type}
          value={value}
          onChange={this.handleOnChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyPress={e => onKeyPress(e)}
        />
        <label>{!valid ? error : placeholder}</label>
      </div>
    );
  }
}

export default InputText;