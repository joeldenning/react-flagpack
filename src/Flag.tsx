import * as React from 'react'
import type { Flags } from 'flagpack-core'
import './Flag.scss'

interface Props {
  code: Flags,
  size?: string,
  gradient?: '' | 'top-down' | 'real-circular' | 'real-linear',
  hasBorder?: boolean,
  hasDropShadow?: boolean,
  hasBorderRadius?: boolean,
  className?: string
}

const Flag: React.FC<Props> = ({
  code = 'NL',
  size = 'l',
  gradient = '',
  hasBorder = true,
  hasDropShadow = false,
  hasBorderRadius = true,
  className
<<<<<<< Updated upstream
}: Props) => (
  <div
    className={
      `flag
    ${gradient}
    size-${size}
    ${hasBorder ? 'border' : ''}
    ${hasDropShadow ? 'drop-shadow' : ''}
    ${hasBorderRadius ? 'border-radius' : ''}
    ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`
    }>
    <img src={require(`./flags/${size}/${code}.svg`).default} />
  </div>
)
=======
}: Props) => {
  const [imgSrc, setImgSrc] = React.useState()

  React.useEffect(() => {
    import(`./flags/${size}/${code}.svg`)
      .then(module => {
        setImgSrc(module.default)
      })
  }, [size, code])

  if (!imgSrc) {
    // Waiting to download the img src
    return null
  }

  return (
    <div
      className={
        `flag
      ${gradient}
      size-${size}
      ${hasBorder ? 'border' : ''}
      ${hasDropShadow ? 'drop-shadow' : ''}
      ${hasBorderRadius ? 'border-radius' : ''}
      ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`
      }>
      <img src={require(`./flags/${size}/${code}.svg`)} />
    </div>
  )
}
>>>>>>> Stashed changes

export default Flag
