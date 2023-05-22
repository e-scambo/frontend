import React from 'react';
import {useField} from '@unform/core';
import {Container, Input, ErrorMessage, EmailIcon} from './styles';
import emailIcon from 'assets/img/email.png';

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

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container error={Boolean(error)}>
        <Input
          ref={inputRef}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
        <EmailIcon
          src={emailIcon}
        />
      </Container>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </>
  );
};

export default InputForm;
