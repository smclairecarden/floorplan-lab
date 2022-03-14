import Bath from "./Bath"
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return(
    <>
    <div className="bedroom">
    <Bedroom bedNum = {1} />
    </div>
    <div className="kitchen">
    <Kitchen />
    </div>
    <div className="bath">
    <Bath size="Full" />
    </div>
    <div className="bedroom">
    <Bedroom bedNum = {2} />
    </div>
    <div className="living-room">
    <LivingRoom />
    </div>
    <div className="bath">
    <Bath size="Half" />
    </div>
    <div className="bedroom">
    <Bedroom bedNum = {3} />
    </div>
    </>
  )
}

export default FloorPlan