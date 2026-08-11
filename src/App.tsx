import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 bg-white dark:bg-neutral-900">
      <h1 className="text-4xl font-semibold text-neutral-900 dark:text-white">
        React + Tailwind
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Edit <code className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">src/App.tsx</code> to get started
      </p>
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
        className="rounded-md bg-neutral-900 px-4 py-2 text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        Count is {count}
      </button>
    </div>
  )
}

export default App
