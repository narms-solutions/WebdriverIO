import NavComponent from "./component/nav-comp";

class HomePage{
    open(){
        return browser.url('/');
    }
    get btnGetStarted(){
        return $('#get-started');
    }

    get imageLogo(){
        return $('#masthead > div > div > div.tg-block.tg-block--one > div > a');
    }
    get txtHeading(){
        return $('.elementor-widget-container h1');
    }
    get NavComponent(){
        return NavComponent;
    }

}
export default new HomePage();