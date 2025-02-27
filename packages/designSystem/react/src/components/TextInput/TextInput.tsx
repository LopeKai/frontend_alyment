import { ComponentProps, ElementRef, forwardRef } from "react";
import { useField, FieldHookConfig } from 'formik';
import { TextInputContainer, Input, Span, TextError } from "./styles";

export interface TextInputProps extends ComponentProps<typeof Input> {
    title: string;
    name: string;
};

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps & FieldHookConfig<string>>(
    ({ title, ...props }: TextInputProps, ref) => {
        const [field, meta] = useField(props); 

        return (
            <TextInputContainer>
                <Input
                    ref={ref}
                    {...field} 
                    {...props}
                />
                <Span>{title ? title : 'description'}</Span>
                {meta.touched && meta.error && (
                    <TextError>{meta.error}</TextError>
                )}
            </TextInputContainer>
        );
    }
);
