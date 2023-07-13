import React from 'react';
import {useField} from '@unform/core';
import {Container, Input, ErrorMessage} from './styles';
import {Icon} from './styles';

interface Props {
  name: string
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputForm: React.FC<Props> = (props) => {
  const inputRef = React.useRef(null);
  const {fieldName, registerField, error} = useField(props.name);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Container error={Boolean(error)}>
        <Input
          ref={inputRef}
          type={showPassword ? 'text' : props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
        <Icon
          // alt={showPassword ? 'Hide password' : 'Show password'}
          onClick={toggleShowPassword}
        />
      </Container>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </>
  );
};

export default InputForm;
