const Head = async ({ params: { movie }}:{ params: { movie: string } }) => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIES_API_KEY}`)
  const res = await data.json()
  const title = res.title
  
  return (
  <>
    <title>{title}</title>
    <meta content='width=device-width initial-scale=1' />
    <meta name='description' content='About Next JS 13' />
    <link rel='icon' href='/favicon.ico' />
  </>
)}

export default Head