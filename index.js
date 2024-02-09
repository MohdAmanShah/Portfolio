import { RenderProjects } from "./Projects/projects.js";
import {RenderSkills} from "./Aboutme/Skills/skills.js"
import { makeHamburgerEvent, rendorActiveLink } from "./Navigation/navigation.js";
makeHamburgerEvent();
RenderSkills();
RenderProjects();
rendorActiveLink();