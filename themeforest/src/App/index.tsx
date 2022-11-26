import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { themes } from '@/theme/theme'
import GlobalStyles from '@/theme/globalStyles'
import { MainWrapperStyled } from './styled'
import Header from '@/containers/Header'
import Footer from '@/containers/Footer'
import Main from '@/containers/Main'
import { Pages } from '@/constants/path'
import Home from '@/pages/Home'
import Solutions from '@/pages/Solutions'
import Blog from '@/pages/Blog'
import Contacts from '@/pages/Contacts'
import OurTeam from '@/pages/OurTeam'
import AboutUs from '@/pages/AboutUs'
import Services from '@/pages/Services'
import Faq from '@/pages/Faq'
import Error404 from '@/pages/Error404'
import Elements from '@/pages/Elements'

const App = () => (
  <ThemeProvider theme={themes}>
    <BrowserRouter>
      <MainWrapperStyled>
        <Header />
        <Main>
          <Routes>
            <Route path={Pages.HOME} element={<Home />} />
            <Route path={Pages.SOLUTIONS} element={<Solutions />} />
            <Route path={Pages.BLOG} element={<Blog />} />
            <Route path={Pages.CONTACTS} element={<Contacts />} />
            <Route path={Pages.OUR_TEAM} element={<OurTeam />} />
            <Route path={Pages.ABOUT_US} element={<AboutUs />} />
            <Route path={Pages.SERVICE} element={<Services />} />
            <Route path={Pages.FAQ} element={<Faq />} />
            <Route path={Pages.ELEMENTS} element={<Elements />} />
            <Route path={Pages.ERROR_404} element={<Error404 />} />
          </Routes>
        </Main>
        <Footer />
      </MainWrapperStyled>
    </BrowserRouter>
    <GlobalStyles />
  </ThemeProvider>
)

export default App
