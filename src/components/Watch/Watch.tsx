import React, { useEffect, useRef, useState } from 'react'

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Set Visible Watch Timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0)
  const intervalRef = useRef<number | null>(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  return <div>Watch: {seconds}</div>
}
