import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticleList from '../components/ArticleList'
import ArticleView from '../components/ArticleView'
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
