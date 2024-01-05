import Image from 'next/image'
import { TwoImagesInARowAtom } from './TwoImagesInRowAtom'

type Props = {
  src: string | string[]
  altText?: string
  caption?: string
  source?: string
}

const ImageAtom = ({ src, altText, caption, source }: Props) => {
  const showCaption = caption || source
  const showTwoImagesInRow = Array.isArray(src) && src.length === 2
  if (showTwoImagesInRow) {
    return (
      <TwoImagesInARowAtom
        src={src}
        altText={altText}
        caption={caption}
        source={source}
        showCaption={showCaption}
      />
    )
  }
  if (typeof src !== 'string') {
    throw Error('src must be a string or an array of strings')
  }
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src={src}
        alt={altText ?? caption ?? ''}
        height={500}
        width={500}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      />
      {showCaption && (
        <figcaption style={{ textAlign: 'center', fontSize: 'smaller' }}>
          {caption && caption} {source && <a href={source}>(Source)</a>}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageAtom
