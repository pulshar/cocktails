import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  return <div><h1>App</h1></div>;
}
