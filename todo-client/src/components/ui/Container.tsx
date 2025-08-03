import type { ReactNode } from "react"

type ContainerProps={
    children:ReactNode
}


export default function Container({children}:ContainerProps) {
  return (
    <div className=" h-screen w-full max-w-7xl mx-auto">
       {children}
    </div>
  )
}
