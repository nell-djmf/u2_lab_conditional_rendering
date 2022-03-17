import LandingPage from "./LandingPage"
import Info from "./Info"
import ErrorPage from "./ErrorPage"
import Thanks from "./Thanks"

const Form = (props) => {

  return (
  <div>
    <LandingPage incrementPage={props.incrementPage}/>
    <Info incrementPage={props.incrementPage}/>
    <ErrorPage incrementPage={props.incrementPage}/>
    <Thanks incrementPage={props.incrementPage}/>
  </div>

  )
}

export default Form
