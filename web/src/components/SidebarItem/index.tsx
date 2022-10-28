import React from 'react'
import { Container } from './sidebarItems-styles'

export const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}
