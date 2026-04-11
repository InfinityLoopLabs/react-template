import { Flex } from '@infinityloop.labs/ui-kit'
import { Outlet } from 'react-router'

export const MainLayout: FC = () => (
  <Flex column className="min-h-screen">
    <Outlet />
  </Flex>
)
