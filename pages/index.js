import { useEffect, useRef } from "react"

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    console.log(canvasRef.current)
  },[])
  return (
    <div>
       <canvas ref={canvasRef} className="canvas" />
    </div>
  )
}
