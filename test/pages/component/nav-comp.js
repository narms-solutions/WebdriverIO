class NavComponent{
    get navMenyList(){
        return ($('#primary-menu').$$('li[id*=menu]'))
    }
    
}
export default new NavComponent();