import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";


function App() {
  
;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <SignIn></SignIn>
        </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
