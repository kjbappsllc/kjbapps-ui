import { About } from "./components/about";
import { Header } from "./components/header";

export const App = () => {
  return (
    <div className="h-full">
      <Header />
      <About />
    </div>
  );
};
