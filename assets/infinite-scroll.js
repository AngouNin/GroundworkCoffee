var elem = document.querySelector(isSettings.container);
console.log(el);
console.log(isSettings)
console.log($(isSettings.path))
if($(isSettings.path).length > 0){
var infScroll = new InfiniteScroll( elem, {
    path: isSettings.path,
    append: isSettings.append,
    history: false,
    hideNav: isSettings.hideNav,
    status: isSettings.status
});
}