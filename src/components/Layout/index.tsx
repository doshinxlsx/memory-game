import { Flex } from '@chakra-ui/react'
import React from 'react'
import { LayoutType } from '../../utils/types'

const Layout = ({ children }: LayoutType) => {
  return (
    <Flex w='100%' h='100vh'>
      {children}
    </Flex>
  )
}

export default Layout
