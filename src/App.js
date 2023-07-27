import logo from "./logo.svg";
import "./App.css";
import Myheader from "./header";
import MySkill from "./skill";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MyPersonal from "./personal";
import MyContact from "./contact";
import MyEducation from "./education";
import MyResume from "./resume";
import PersonalEdit from "./editpersonal";
import ContactEdit from "./editcontact";
import EducationEdit from "./editeducation";
import SkillEdit from "./editskills";
import Register from "./register";
import UserList from "./userlist";
import UserList2 from "./userlist2";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Register />}></Route>
        <Route exact path="/userlist" element={<UserList />}></Route>
        <Route exact path="/resume" element={<MyResume />}></Route>
        <Route
          exact
          path="/editeducation/:id"
          element={<EducationEdit />}
        ></Route>
        <Route exact path="/education" element={<MyEducation />}></Route>
        <Route exact path="/editcontact/:id" element={<ContactEdit />}></Route>
        <Route exact path="/contact" element={<MyContact />}></Route>
        <Route
          exact
          path="/editpersonal/:id"
          element={<PersonalEdit />}
        ></Route>
        <Route exact path="/personal" element={<MyPersonal />}></Route>
        <Route exact path="/" element={<Myheader />}></Route>
        <Route exact path="/editskills/:id" element={<SkillEdit />}></Route>
        <Route exact path="/skill" element={<MySkill />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
