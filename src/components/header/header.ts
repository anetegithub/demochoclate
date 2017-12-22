import { ViewModelExisted } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
import { HeaderView } from "./headerView";
import { SocialsPanel } from "../socialsPanel/socialsPanel";
import { Search } from "../search/search";
import { ViewModelFile } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelFile";
import { CategoryButton } from "../categoryButton/categoryButton";

export class Header extends ViewModelFile {
    htmlFileUrl: string = "./src/components/header/header.html";
    socials: SocialsPanel = new SocialsPanel();
    search: Search = new Search();
    btn: CategoryButton = new CategoryButton("wtf");
}