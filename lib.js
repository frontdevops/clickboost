
document.addEventListener('mousedown', function(e){
    if (!e.target._click) return;
    return e.target._click.call(e.target, e);
});

Element.prototype.on = Element.prototype.addEventListener;

Element.prototype.addEventListener = function(action, func, bubling) {
    if (action == 'click') return this._click = f;
    return this.on(action, func, bubling);
};
