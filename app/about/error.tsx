'use client'

const Error = ({ error, reset }: { error: any, reset: any }) => {
  return (
    <div>
      Whoops! - {error.message}
      <button onClick={() => reset()}>Reload</button>
    </div>
  )
}

export default Error