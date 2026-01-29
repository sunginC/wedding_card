import { Cover } from "./component/cover"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { LazyDiv } from "./component/lazyDiv"
import { STATIC_ONLY } from "./env"

function App() {
  return (
    <div className="background">
      <BGEffect />
      <div className="card-view">
          {/* 표지 */}
          <Cover />
      </div>
    </div>
  )
}

export default App
