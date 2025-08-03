import type { ReactNode } from "react"

type ContainerProps={
    children:ReactNode
}


export default function Container({children}:ContainerProps) {
  return (
    <div className=" h-screen w-full max-w-7xl mx-auto
     px-2 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
       {children}
    </div>
  )
}
