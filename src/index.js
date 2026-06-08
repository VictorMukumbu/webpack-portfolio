import "./styles.css"
import { greeting } from "./greeting.js";
import {renderSkills} from "./skills.js";
import { imageRender } from "./greeting.js";

function load(){
    greeting()
    renderSkills()
    imageRender()
}

load()