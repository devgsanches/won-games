import { Home } from '../_templates/Home'

import { query } from '../_lib/apollo-client'
import { GetHomeDocument, type GetHomeQuery } from '@/app/graphql/generated/home';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import { GET_HOME } from '@/app/graphql/queries/home';



const HomePage = async () => {
  const date = new Date()

  const dateFormatted = dayjs(date).format('YYYY-MM-DD')

  const { data } = await query<GetHomeQuery>({
    query: GET_HOME,
    variables: { date: dateFormatted }
  })

  console.log({ data });
  if (!data) {
    return notFound()
  }

  const { banners, newReleases, upcoming, free, sections } = data


  return <Home banners={banners} newReleases={newReleases} upcoming={upcoming} free={free} sections={sections} />
}

export default HomePage
