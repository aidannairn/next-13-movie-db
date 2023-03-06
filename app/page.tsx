import { WithMovie } from "./interfaces"
import Movie from "./components/Movie/Movie"

const Home = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIES_API_KEY}`)
  const res = await data.json()

  return (
    <main>
      <h1>Hello Next 13 🔥</h1>
      <div className='grid gap-8 grid-cols-fluid'>
        {
          res.results.map((m:WithMovie, i:number) => (
            <Movie 
              key={i}
              id={m.id}
              title={m.title}
              poster_path={m.poster_path}
              release_date={m.release_date}
            />
          ))
        }
      </div>
    </main>
  )
}


export default Home