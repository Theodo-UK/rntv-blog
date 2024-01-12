type Props = {
  src: string
  type: string
}

const VideoAtom = ({ src, type }: Props) => {
  return (
    <video
      width="100%"
      style={{ width: '100%', height: '100%', position: 'relative', borderRadius: '0.25rem' }}
      autoPlay
      loop
      muted
    >
      <source src={src} type={type} />
    </video>
  )
}

export default VideoAtom
