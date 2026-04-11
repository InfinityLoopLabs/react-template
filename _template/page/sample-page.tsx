import { Flex } from '@infinityloop.labs/ui-kit'
import { clsx } from '@infinityloop.labs/utils'

export function meta() {
  return [
    { title: 'SamplePage' },
    {
      name: 'description',
      content: 'Route sample-page',
    },
  ]
}

export default function SamplePage() {
  return (
    <Flex column className={clsx('w-full h-screen')}>
      <main />
    </Flex>
  )
}
