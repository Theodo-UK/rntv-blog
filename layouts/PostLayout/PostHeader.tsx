import PageTitle from '@/components/PageTitle'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

type Props = {
  title: string
  date: string
  locale: string
}

export const PostHeader = ({ title, date, locale }: Props) => {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(locale, postDateTemplate)}
              </time>
            </dd>
          </div>
        </dl>
        <div>
          <PageTitle>{title}</PageTitle>
        </div>
      </div>
    </header>
  )
}
