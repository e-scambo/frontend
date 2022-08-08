import React, {Fragment} from 'react';
import {Container, Label, Input} from './styles';
import {useField} from '@unform/core';
import {ErrorMessage} from './styles';

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
    <Fragment>
      <Container error={Boolean(error)}>
        <Label> {props.label} </Label>
        <Input
          ref={inputRef}
          type={props.type}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      </Container>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </Fragment>
  );
};

export default InputForm;
