"use client";
import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "./components/auth-updater";
import AuthViewer from "./components/auth-viewer";
import CountUpdater from "./components/count-updater";
import CountViewer from "./components/count-viewer";
import TodoUpdater from "./components/todo-updater";
import TodoViewer from "./components/todo-viewer";

export default function Redux() {
  return (
    <ReduxProvider count={12}>
      <main className="w-full h-screen flex flex-grow justify-around items-center">
        <div>
          <AuthUpdater />
          <AuthViewer />
        </div>
        <div>
          <CountUpdater />
          <CountViewer />
        </div>
        <div>
          <TodoUpdater />
          <TodoViewer />
        </div>
      </main>
    </ReduxProvider>
  );
}
