import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'

export const Headline = () => {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
        <div className="row-start-2 sm:col-start-1 sm:row-start-1">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
            Bringing React to the Big Screen
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <Image
          className="row-start-1 sm:col-start-2 sm:row-start-1"
          src="/static/images/react-native-tv.webp"
          alt="React Native TV"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
