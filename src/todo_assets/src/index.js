import { todo } from "../../declarations/todo";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with todo actor, calling the greet method
  const greeting = await todo.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
