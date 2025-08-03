import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";
import type { ReactNode } from "react";




export default function Todo() {
  return (
    <Container>
        <h1 className="text-center text-3xl font-semibold my-6">My Todos</h1>
        <TodoContainer/>
    </Container>
  )
}
