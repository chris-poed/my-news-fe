import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ArticleList from '../src/components/ArticleList'
import ArticleView from '../src/components/ArticleView'
import {Routes, Route} from 'react-router'
import Box from '@mui/material/Container'

function App () {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }} >
      <Header sx={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }} />
      <Routes>
        <Route path='/' element={<ArticleList/>}/>
        <Route path='/article/:article_id' element={<ArticleView />}/>
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
