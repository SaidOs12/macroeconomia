jQuery('document').ready(function($){
	var menuBtn=$('.menu-icon'),
		menu=$('.navigation ul');
	menuBtn.click(function(){
		if(menu.hasClass('show')){
			menu.removeClass('show');
		}else{
			menu.addClass('show');
		}
	});
});

const links = document.querySelectorAll('nav ul li a');
for (const link of links) {
  link.addEventListener('click', function() {
    links.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
  });
}