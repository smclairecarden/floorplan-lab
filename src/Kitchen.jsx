import Oven from "./Oven"
import Sink from "./Sink"


const Kitchen = (props) => {
  return (
    <>
    <h2>
      Kitchen
    </h2>
    <div className="oven">
    <Oven />
    </div>
    <div className="sink">
    < Sink />
    </div>
    </>
  )
}

export default Kitchen