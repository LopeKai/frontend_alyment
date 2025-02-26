import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
    all: 'unset',
    height: 52,
    fontFamily: '$default',
    fontWeight: '$semiBold',
    textAlign: 'center',
    borderRadius: '.5rem',
    padding: '$md $xl',
    width: '$2xl',
    border: 0,
    boxSizing: 'border-box',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$sm',

    svg: {
        width: 24,
        height: 20,
    },

    '&:disabled': {
        backgroundColor: '$gray400',
        cursor: 'not-allowed',
    },

    '&:not([disabled]):hover': {
        backgroundColor: '$blue700',
    },

    variants: {
        variant: {
            primary: {
                backgroundColor: '$green700',
                color: '$white',

                '&:not([disabled]):hover': {
                    backgroundColor: '$green800',
                },
            },

            secondary: {
                border: '1px solid #417e384d',
                backgroundColor: 'transparent',
                borderRadius: '.5rem',
                color: '#000',
                cursor: 'not-allowed',

                '&:not([disabled]):hover': {
                    backgroundColor: '$gray400',
                },
            },

            tertiary: {
                backgroundColor: 'none',
                color: '$gray800',
                border: '1px solid $gray300',

                '&:not([disabled]):hover': {
                    backgroundColor: '$gray200',
                    border: 'none',
                },
            },

            greenDark: {
                backgroundColor: '$green700',
                color: '$white',

                '&:not([disabled]):hover': {
                    backgroundColor: '$green800',
                },
            },

            greenLight: {
                backgroundColor: '$green100',
                color: '$green800',

                '&:not([disabled]):hover': {
                    backgroundColor: '$green200',
                },
            },


        },

        size: {
            full: {
                minWidth: '100%',
                fontSize: '$md',
            },
            md: {
                minWidth: 382,
                fontSize: '$md',
            },
        },
    },

    defaultVariants: {
        size: 'md',
        variant: 'primary',
    },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}

Button.displayName = 'Button'
