
document.addEventListener('mousedown', function(e){
    if (!e.target._click) return;
    return e.target._click.call(e.target, e);
});

Element.prototype.on = Element.prototype.addEventListener;

Element.prototype.addEventListener = function(a, f, b) {
  if (a == 'click'){
  	return this._click = f;
	}

  return this.on(a, f, b);
};
