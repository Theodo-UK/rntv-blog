import Image from 'next/image'

export const TwoImagesInARowAtom = ({ src, altText, caption, source, showCaption }) => {
  return (
    <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          src={src[0]}
          alt={altText ?? caption ?? ''}
          height={500}
          width={500}
          style={{
            width: 'calc(50% - 3px)',
            marginRight: '3px',
            height: '100%',
            position: 'relative',
          }}
        />
        <Image
          src={src[1]}
          alt={altText ?? caption ?? ''}
          height={500}
          width={500}
          style={{
            width: 'calc(50% - 3px)',
            marginLeft: '3px',
            height: '100%',
            position: 'relative',
          }}
        />
      </div>
      {showCaption && (
        <figcaption style={{ textAlign: 'center', fontSize: 'smaller' }}>
          {caption && caption} {source && <a href={source}>(Source)</a>}
        </figcaption>
      )}
    </figure>
  )
}
