import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@alyment-testkaique/react'

export default {
    title: 'Formulário/Botão',
    component: Button,
    args: { // args sao propriedades
        children: 'Entrar',
        variant: 'primary',
        size: 'md',
        disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary',],
            control: {
                type: 'inline-radio'
            }
        },

        size: {
            options: ['full', 'md'],
            control: {
                type: 'inline-radio'
            }
        },

        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click',
        }
    }

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary'
    }
}