import { createBrowserRouter } from 'react-router-dom'
import { DemoPage } from '../pages/homepage/homepage'
import { Projetos } from '../pages/projetos/projetos'
import { Experiencia } from '../pages/experiencia/experiencia'
import { SobreMim } from '../pages/sobre/sobre-mim'
import { Contatos } from '../pages/contatos/contatos'
import { NaoEncontrada } from '../pages/nao-encontrada'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DemoPage />,
  },
  {
    path: '/projetos',
    element: <Projetos />,
  },
  {
    path: '/experiencia',
    element: <Experiencia />,
  },
  {
    path: '/sobre-mim',
    element: <SobreMim />,
  },
  {
    path: '/contatos',
    element: <Contatos />,
  },
  {
    path: '*',
    element: <NaoEncontrada />,
  },
])
