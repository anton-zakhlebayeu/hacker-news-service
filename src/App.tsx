import React from 'react'
import { defaultTheme } from './themes/default.theme'
import { ThemeProvider } from '@mui/material'
import { Main } from './core/components/shared/Main/Main.styled'
import Navbar from './core/components/shared/Navbar/Navbar'
import { Header } from './core/components/shared/Header/Header.styled'
import { Body } from './core/components/shared/Body/Body.styled'
import StoryContainer from './core/components/containers/StoryContainer/StoryContainer'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <Main>
          <Header>
            <Navbar />
          </Header>
          <Body>
            <StoryContainer />
          </Body>
        </Main>
      </ThemeProvider>
    </div>
  )
}

export default App
