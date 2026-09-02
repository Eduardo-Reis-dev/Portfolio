import { createBrowserRouter } from 'react-router-dom'
import { Homepage } from '../pages/homepage/homepage'
import { Projetos } from '../pages/projetos/projetos'
import { ProjetoDetalhe } from '../pages/projetos/detalhes'
import { Experiencia } from '../pages/experiencia/experiencia'
import { SobreMim } from '../pages/sobre/sobre-mim'
import { Contatos } from '../pages/contatos/contatos'
import { NaoEncontrada } from '../pages/nao-encontrada/nao-encontrada'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/projetos',
    children: [
      { index: true, element: <Projetos /> },
      { path: ':id', element: <ProjetoDetalhe /> },
    ],
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
