import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())

app.get('/produtos', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'Game 1',
      plataformas: ['PC'],
      precoAntigo: 59.99,
      preco: 49.99,
      categoria: 'Action',
      imagem: 'https://placehold.co/300x300'
    },
    {
      id: 2,
      titulo: 'Game 2',
      plataformas: ['PC', 'PS5'],
      precoAntigo: 69.99,
      preco: 59.99,
      categoria: 'Adventure',
      imagem: 'https://placehold.co/300x300'
    },
    {
      id: 3,
      titulo: 'Game 3',
      plataformas: ['PC'],
      precoAntigo: 99.99,
      preco: 79.99,
      categoria: 'RPG',
      imagem: 'https://placehold.co/300x300'
    },
    {
      id: 4,
      titulo: 'Game 4',
      plataformas: ['PC'],
      precoAntigo: 79.99,
      preco: 49.99,
      categoria: 'Action',
      imagem: 'https://placehold.co/300x300'
    },
    {
      id: 5,
      titulo: 'Game 5',
      plataformas: ['PC'],
      precoAntigo: 89.99,
      preco: 69.99,
      categoria: 'Action',
      imagem: 'https://placehold.co/300x300'
    },
    {
      id: 6,
      titulo: 'Game 6',
      plataformas: ['PC, XBOX'],
      precoAntigo: 89.99,
      preco: 69.99,
      categoria: 'Action',
      imagem: 'https://placehold.co/300x300'
    }
  ])
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`)
})
