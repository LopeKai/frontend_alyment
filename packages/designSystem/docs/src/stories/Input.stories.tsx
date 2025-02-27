import type { StoryObj, Meta } from '@storybook/react'
import { Formik, Form } from 'formik';
import { TextInput, TextInputProps } from '@alyment-testkaique/react'

export default {
    title: 'Form/Text Input',
    component: TextInput,
    args: {},
    decorators: [
        (Story: any) => {
            return (
                <Formik
                    initialValues={{ example: '' }} 
                    onSubmit={(values) => console.log(values)} 
                >
                    <Form>
                        <div style={{ marginTop: 20 }}>
                            <Story />
                        </div>
                    </Form>
                </Formik>
            );
        },
    ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        name: 'example', 
        title: 'Example Input', 
        placeholder: 'Enter text',
    },
};

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        name: 'example',
        title: 'Example Input',
        placeholder: 'Enter text',
        disabled: true,
    },
};