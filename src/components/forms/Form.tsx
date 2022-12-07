import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import type { AnyObjectSchema } from 'yup';

type Props<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => ReactNode;
  options?: UseFormProps<TFormValues>;
  schema?: Schema;
  id?: string;
};

const Form = <TFormValues extends Record<string, unknown>, Schema extends AnyObjectSchema>(
  props: Props<TFormValues, Schema>,
) => {
  const { onSubmit, children, options, schema, id } = props;
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && yupResolver(schema),
  });

  return (
    <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  );
};

export default Form;
