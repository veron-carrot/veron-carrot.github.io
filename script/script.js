/* Variables */

var all_button = document.getElementById( "all_button" );

var logos_button = document.getElementById( "logos_button" );

var games_button = document.getElementById( "games_button" );

var illustrations_button = document.getElementById( "illustrations_button" );

var logos_block = document.getElementsByClassName("logos");

var games_block = document.getElementsByClassName("games");

var illustrations_block = document.getElementsByClassName("illustrations");

var other_block = document.getElementsByClassName("other");

/* Variables */

var all_button = document.getElementById( "all_button" );

var logos_button = document.getElementById( "logos_button" );

var games_button = document.getElementById( "games_button" );

var illustrations_button = document.getElementById( "illustrations_button" );

var logos_block = document.getElementsByClassName("logos");

var games_block = document.getElementsByClassName("games");

var illustrations_block = document.getElementsByClassName("illustrations");

var other_block = document.getElementsByClassName("other");

var divs = document.getElementsByTagName("div");

var menu_logo = document.getElementById("menu_logo_symbol");

var menu_logo_close = document.getElementById("menu_logo_close");

var menu_logo_symbol = document.getElementById("menu_logo_symbol_real");

var left_aside_block = document.getElementById("left_aside_block");

var contacts_block  = document.getElementById("contacts_block");

var contacts = document.getElementById("contacts");

var contacts_a = document.querySelectorAll("#contacts_block a");

var my_img = document.querySelectorAll("main div");

var block_for_width = document.getElementById("for_width");

/* Variables end */

/* Sorting */

function hideAllOther(x, y, z) {


	for( i = 0; i < document.querySelectorAll(".right_aside nav a").length; i++) {
		document.querySelectorAll(".right_aside nav a")[i].style.color = "#4e5352";
	}

	this.style.color = "white";

	if (games_block[0].classList.contains("hide_block")) {
		for ( i = 0; i < games_block.length; i++ ) {
			games_block[i].classList.remove("hide_block");
		}
	}

	if (logos_block[0].classList.contains("hide_block")) {
		for ( i = 0; i < logos_block.length; i++ ) {
			logos_block[i].classList.remove("hide_block");
		}
	}

	if (illustrations_block[0].classList.contains("hide_block")) {
		for ( i = 0; i < illustrations_block.length; i++ ) {
			illustrations_block[i].classList.remove("hide_block");
		}
	}

	if(this == logos_button){
		x = games_block;
		y = illustrations_block;
		z = other_block;
	}

	else if(this == games_button){
		x = logos_block;
		y = illustrations_block;
		z = other_block;
	}

	else if(this == illustrations_button){
		x = logos_block;
		y = games_block;
		z = other_block;
	}

	else if(this == all_button){
		for ( i = 0;  i < divs.length; i++ ) {
			divs[i].classList.remove("hide_block");
		}
	}

	for( i = 0 ; x.length > i ; i++) {
		x[i].classList.add("hide_block");
	}

	for( i = 0 ; y.length > i ; i++) {
		y[i].classList.add("hide_block");
	}

	for( i = 0 ; z.length > i ; i++) {
		z[i].classList.add("hide_block");
	}
}

logos_button.onclick = 
games_button.onclick = 
illustrations_button.onclick = 
all_button.onclick =
logos_button.onclick = hideAllOther;

/* Sorting  end */

/* Menu */

function openMenu() {
	left_aside_block.classList.toggle("left_aside_display");
	menu_logo_symbol.classList.toggle("opacity_to_0");
	menu_logo_close.classList.toggle("opacity_to_1");
}

menu_logo.onclick = openMenu;

/* Menu end */

/* Contacts block */

function openContacts() {
	contacts_block.classList.toggle("contacts_open");
	for (var i = 0; i < contacts_a.length; i++) {
		contacts_a[i].classList.toggle("a_hide");
	};
}

contacts.onclick = openContacts;

/* Contacts block end */

setInterval(widthChange, 1000);

function widthChange() {
	for(i = 0; i < my_img.length; i++ ){
		var img_width = getComputedStyle(block_for_width).width;
		var real_width = img_width.substring(0, img_width.length - 2);
		my_img[i].style.height =  real_width / 1.7 + "px";
	}
}
