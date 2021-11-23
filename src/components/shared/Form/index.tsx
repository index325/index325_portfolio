import React, { ReactElement, createElement } from "react";
import {
  DeepPartial,
  useForm,
  SubmitHandler,
  UnpackNestedValue,
  FormProvider,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Flex } from "@chakra-ui/react";

interface IFormProps<T> {
  defaultValues?: UnpackNestedValue<DeepPartial<T>>;
  onSubmit: SubmitHandler<T>;
  validationSchema: Yup.ObjectSchema<any>;
}

export default function Form<T>({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
}: IFormProps<T> & { children: ReactElement | ReactElement[] }) {
  const formMethods = useForm<T>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { register, handleSubmit } = formMethods;

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormProvider {...formMethods}>
        <Flex direction="column">
          {Array.isArray(children)
            ? children.map((child) => {
                return child.props.name
                  ? createElement(child.type, {
                      ...{
                        ...child.props,
                        register,
                        key: child.props.name,
                      },
                    })
                  : child;
              })
            : children}
        </Flex>
      </FormProvider>
    </form>
  );
}
