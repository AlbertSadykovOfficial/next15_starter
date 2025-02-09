"use client"
import CountUpdater from "./components/count-updater";
import CountViewer from "./components/count-viewer";
import TodoUpdater from "./components/todo-updater";
import TodoViewer from "./components/todo-viewer";
import { observableTodoStore } from '@/store/features/todos/'

export default function Mobx() {
  return (
    <main className="w-full h-screen flex flex-grow justify-around items-center">
      <div className="flex flex-col gap border border-1 border-black p-20">
        <CountViewer/>
        <CountUpdater/>
      </div>
      <div className="flex flex-col gap border border-1 border-black p-20">
        <TodoViewer store={observableTodoStore}/>
        <TodoUpdater store={observableTodoStore}/>
      </div>
    </main>
  );
}
