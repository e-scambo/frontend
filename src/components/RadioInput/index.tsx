import React from 'react';
import {useField} from '@unform/core';
import {Label} from './styles';
import {Container} from './styles';
import {Radio} from './styles';
import {Option} from './styles';
import {RadioLabel} from './styles';
import {RadioGroup} from './styles';
import {ErrorMessage} from './styles';


interface PropsOptions {
  id: number;
  value: string;
  label: string;
  checked: boolean;
}

interface Props {
  name: string
  label?: string,
  placeholder?: string
  options: PropsOptions[]
  onSelect?: () => void
}


const RadioInput: React.FC<Props> = (props) => {
  const inputRefs = React.useRef<HTMLInputElement[]>([]);
  const {fieldName, registerField,
    error, defaultValue = ''} = useField(props.name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,

      getValue: (refs: HTMLInputElement[]) =>
        refs.find((ref) => ref.checked)?.value || '',

      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },

      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container>
      <Label> {props.label} </Label>
      <RadioGroup>
        {props.options.map((option, index) => (
          <Option key={index}>
            <Radio
              ref={(ref) => {
                inputRefs.current[index] = ref as HTMLInputElement;
              }}
              defaultChecked={defaultValue === option.id}
              type='radio'
              name={fieldName}
              value={option.value}
              id={String(option.id)}
              error={error}
              onChange={() => props.onSelect && props.onSelect()}
            />
            <RadioLabel
              htmlFor={String(option.id)}
            >
              {option.label}
            </RadioLabel>
          </Option>
        ))}
      </RadioGroup>
      {error && <ErrorMessage> {error} </ErrorMessage>}
    </Container>
  );
};

export default RadioInput;
