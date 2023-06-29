import Container from '@mui/material/Container'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import { ExercisesPage } from './pages/Exercises/components/ExercisesPage'
import { ProductsPage } from './pages/Products/components/ProductsPage'
import { Header } from './widgets/Header'

export const App = () => {
  return (
    <Container maxWidth='lg'>
      <div className='app'>
        <Header />
        <Suspense>
          <Routes>
            <Route path='/exercises' element={<ExercisesPage />} />
            <Route path='/products' element={<ProductsPage />} />
          </Routes>
        </Suspense>
      </div>
    </Container>
  )
}