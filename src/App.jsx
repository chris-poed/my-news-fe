import './App.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import ArticleList from '../src/components/ArticleList'
import ArticleView from '../src/components/ArticleView'
import {Routes, Route} from 'react-router'

function App () {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ArticleList/>}/>
        <Route path='/article/:article_id' element={<ArticleView />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
