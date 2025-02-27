import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: 50,
})

export const Input = styled('input', {
  width: '100%',
  height: 50,
  padding: '0px 16px',
  border: '1px solid $gray400',
  borderRadius: 12,
  outline: 'none',
  fontSize: '$sm',
  transition: '0.2s',
  color: '$gray700',
  fontFamily: '$default',

  '&:valid ~ span': {
    translate: '0px -36px',
    fontSize: '$sm',
    fontWeight: '$semiBold',
  },

  '&:focus ~ span': {
    color: '$green700',
    translate: '0px -36px',
    fontSize: '$md',
    fontWeight: '$semiBold',
  },

  '&::placeholder-shown ~ span': {
    translate: '0px -36px',
    fontSize: '$md',
    fontWeight: '$semiBold',
  },

  '&:focus': {
    border: '1px solid $green700',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },
})

export const Span = styled('span', {
  position: 'relative',
  left: '4px',
  top: -74,
  translate: '0 -50%',
  fontSize: '$md',
  color: '$gray500',
  pointerEvents: 'none',
  transition: '0.2s',
  fontFamily: '$default',
  fontWeight: '$semiBold',
})

export const TextError = styled('p', {
    color: '$error700',
    position: 'absolute',
    bottom: -20,
    left: 4,
    fontSize: '0.75rem',
})
