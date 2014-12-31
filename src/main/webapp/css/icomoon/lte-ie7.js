/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-home-2' : '&#xe001;',
			'icon-home-3' : '&#xe002;',
			'icon-office' : '&#xe003;',
			'icon-newspaper' : '&#xe004;',
			'icon-pencil' : '&#xe005;',
			'icon-pencil-2' : '&#xe006;',
			'icon-quill' : '&#xe007;',
			'icon-pen' : '&#xe008;',
			'icon-blog' : '&#xe009;',
			'icon-droplet' : '&#xe00a;',
			'icon-paint-format' : '&#xe00b;',
			'icon-image' : '&#x7a;',
			'icon-image-2' : '&#x79;',
			'icon-images' : '&#x69;',
			'icon-camera' : '&#x21;',
			'icon-music' : '&#x22;',
			'icon-headphones' : '&#x23;',
			'icon-play' : '&#x76;',
			'icon-film' : '&#x24;',
			'icon-camera-2' : '&#x25;',
			'icon-dice' : '&#x26;',
			'icon-pacman' : '&#x27;',
			'icon-spades' : '&#x28;',
			'icon-clubs' : '&#x29;',
			'icon-diamonds' : '&#x2a;',
			'icon-pawn' : '&#x2b;',
			'icon-bullhorn' : '&#x2c;',
			'icon-connection' : '&#x2d;',
			'icon-podcast' : '&#x2e;',
			'icon-feed' : '&#x2f;',
			'icon-book' : '&#x30;',
			'icon-books' : '&#x31;',
			'icon-library' : '&#x32;',
			'icon-file' : '&#x33;',
			'icon-profile' : '&#x34;',
			'icon-file-2' : '&#x35;',
			'icon-file-3' : '&#x36;',
			'icon-file-4' : '&#x37;',
			'icon-copy' : '&#x38;',
			'icon-copy-2' : '&#x39;',
			'icon-copy-3' : '&#x3a;',
			'icon-paste' : '&#x3b;',
			'icon-paste-2' : '&#x3c;',
			'icon-paste-3' : '&#x3d;',
			'icon-stack' : '&#x3e;',
			'icon-folder' : '&#x3f;',
			'icon-folder-open' : '&#x40;',
			'icon-tag' : '&#x41;',
			'icon-tags' : '&#x42;',
			'icon-barcode' : '&#x43;',
			'icon-qrcode' : '&#x44;',
			'icon-ticket' : '&#x45;',
			'icon-cart' : '&#x46;',
			'icon-cart-2' : '&#x47;',
			'icon-cart-3' : '&#x48;',
			'icon-coin' : '&#x49;',
			'icon-credit' : '&#x4a;',
			'icon-calculate' : '&#x4b;',
			'icon-support' : '&#x4c;',
			'icon-phone' : '&#x4d;',
			'icon-phone-hang-up' : '&#x4e;',
			'icon-address-book' : '&#x4f;',
			'icon-notebook' : '&#x50;',
			'icon-envelop' : '&#x51;',
			'icon-pushpin' : '&#x52;',
			'icon-location' : '&#x53;',
			'icon-location-2' : '&#x54;',
			'icon-compass' : '&#x55;',
			'icon-map' : '&#x56;',
			'icon-map-2' : '&#x57;',
			'icon-history' : '&#x58;',
			'icon-clock' : '&#x59;',
			'icon-clock-2' : '&#x5a;',
			'icon-alarm' : '&#x5b;',
			'icon-alarm-2' : '&#x5c;',
			'icon-bell' : '&#x5d;',
			'icon-stopwatch' : '&#x5e;',
			'icon-calendar' : '&#x5f;',
			'icon-calendar-2' : '&#x60;',
			'icon-print' : '&#x61;',
			'icon-keyboard' : '&#x62;',
			'icon-screen' : '&#x63;',
			'icon-laptop' : '&#x64;',
			'icon-mobile' : '&#x65;',
			'icon-mobile-2' : '&#x66;',
			'icon-tablet' : '&#x67;',
			'icon-tv' : '&#x68;',
			'icon-cabinet' : '&#x6a;',
			'icon-drawer' : '&#x6b;',
			'icon-drawer-2' : '&#x6c;',
			'icon-drawer-3' : '&#x6d;',
			'icon-box-add' : '&#x6e;',
			'icon-box-remove' : '&#x6f;',
			'icon-download' : '&#x70;',
			'icon-upload' : '&#x71;',
			'icon-disk' : '&#x72;',
			'icon-storage' : '&#x73;',
			'icon-undo' : '&#x74;',
			'icon-redo' : '&#x75;',
			'icon-flip' : '&#x77;',
			'icon-flip-2' : '&#x78;',
			'icon-undo-2' : '&#x7b;',
			'icon-redo-2' : '&#x7c;',
			'icon-forward' : '&#x7d;',
			'icon-reply' : '&#x7e;',
			'icon-bubble' : '&#xe00c;',
			'icon-bubbles' : '&#xe00d;',
			'icon-bubbles-2' : '&#xe00e;',
			'icon-bubble-2' : '&#xe00f;',
			'icon-bubbles-3' : '&#xe010;',
			'icon-bubbles-4' : '&#xe011;',
			'icon-user' : '&#xe012;',
			'icon-users' : '&#xe013;',
			'icon-user-2' : '&#xe014;',
			'icon-users-2' : '&#xe015;',
			'icon-user-3' : '&#xe016;',
			'icon-user-4' : '&#xe017;',
			'icon-quotes-left' : '&#xe018;',
			'icon-busy' : '&#xe019;',
			'icon-spinner' : '&#xe01a;',
			'icon-spinner-2' : '&#xe01b;',
			'icon-spinner-3' : '&#xe01c;',
			'icon-spinner-4' : '&#xe01d;',
			'icon-spinner-5' : '&#xe01e;',
			'icon-spinner-6' : '&#xe01f;',
			'icon-binoculars' : '&#xe020;',
			'icon-search' : '&#xe021;',
			'icon-zoom-in' : '&#xe022;',
			'icon-zoom-out' : '&#xe023;',
			'icon-expand' : '&#xe024;',
			'icon-contract' : '&#xe025;',
			'icon-expand-2' : '&#xe026;',
			'icon-contract-2' : '&#xe027;',
			'icon-key' : '&#xe028;',
			'icon-key-2' : '&#xe029;',
			'icon-lock' : '&#xe02a;',
			'icon-lock-2' : '&#xe02b;',
			'icon-unlocked' : '&#xe02c;',
			'icon-wrench' : '&#xe02d;',
			'icon-settings' : '&#xe02e;',
			'icon-equalizer' : '&#xe02f;',
			'icon-cog' : '&#xe030;',
			'icon-cogs' : '&#xe031;',
			'icon-cog-2' : '&#xe032;',
			'icon-hammer' : '&#xe033;',
			'icon-wand' : '&#xe034;',
			'icon-aid' : '&#xe035;',
			'icon-bug' : '&#xe036;',
			'icon-pie' : '&#xe037;',
			'icon-stats' : '&#xe038;',
			'icon-bars' : '&#xe039;',
			'icon-bars-2' : '&#xe03a;',
			'icon-gift' : '&#xe03b;',
			'icon-trophy' : '&#xe03c;',
			'icon-glass' : '&#xe03d;',
			'icon-mug' : '&#xe03e;',
			'icon-food' : '&#xe03f;',
			'icon-leaf' : '&#xe040;',
			'icon-rocket' : '&#xe041;',
			'icon-meter' : '&#xe042;',
			'icon-meter2' : '&#xe043;',
			'icon-dashboard' : '&#xe044;',
			'icon-hammer-2' : '&#xe045;',
			'icon-fire' : '&#xe046;',
			'icon-lab' : '&#xe047;',
			'icon-magnet' : '&#xe048;',
			'icon-remove' : '&#xe049;',
			'icon-remove-2' : '&#xe04a;',
			'icon-briefcase' : '&#xe04b;',
			'icon-airplane' : '&#xe04c;',
			'icon-truck' : '&#xe04d;',
			'icon-road' : '&#xe04e;',
			'icon-accessibility' : '&#xe04f;',
			'icon-target' : '&#xe050;',
			'icon-shield' : '&#xe051;',
			'icon-lightning' : '&#xe052;',
			'icon-switch' : '&#xe053;',
			'icon-power-cord' : '&#xe054;',
			'icon-signup' : '&#xe055;',
			'icon-list' : '&#xe056;',
			'icon-list-2' : '&#xe057;',
			'icon-numbered-list' : '&#xe058;',
			'icon-menu' : '&#xe059;',
			'icon-menu-2' : '&#xe05a;',
			'icon-tree' : '&#xe05b;',
			'icon-cloud' : '&#xe05c;',
			'icon-cloud-download' : '&#xe05d;',
			'icon-cloud-upload' : '&#xe05e;',
			'icon-download-2' : '&#xe05f;',
			'icon-upload-2' : '&#xe060;',
			'icon-download-3' : '&#xe061;',
			'icon-upload-3' : '&#xe062;',
			'icon-globe' : '&#xe063;',
			'icon-earth' : '&#xe064;',
			'icon-link' : '&#xe065;',
			'icon-flag' : '&#xe066;',
			'icon-attachment' : '&#xe067;',
			'icon-eye' : '&#xe068;',
			'icon-eye-blocked' : '&#xe069;',
			'icon-eye-2' : '&#xe06a;',
			'icon-bookmark' : '&#xe06b;',
			'icon-bookmarks' : '&#xe06c;',
			'icon-brightness-medium' : '&#xe06d;',
			'icon-brightness-contrast' : '&#xe06e;',
			'icon-contrast' : '&#xe06f;',
			'icon-star' : '&#xe070;',
			'icon-star-2' : '&#xe071;',
			'icon-star-3' : '&#xe072;',
			'icon-heart' : '&#xe073;',
			'icon-heart-2' : '&#xe074;',
			'icon-heart-broken' : '&#xe075;',
			'icon-thumbs-up' : '&#xe076;',
			'icon-thumbs-up-2' : '&#xe077;',
			'icon-happy' : '&#xe078;',
			'icon-happy-2' : '&#xe079;',
			'icon-smiley' : '&#xe07a;',
			'icon-smiley-2' : '&#xe07b;',
			'icon-tongue' : '&#xe07c;',
			'icon-tongue-2' : '&#xe07d;',
			'icon-sad' : '&#xe07e;',
			'icon-sad-2' : '&#xe07f;',
			'icon-wink' : '&#xe080;',
			'icon-wink-2' : '&#xe081;',
			'icon-grin' : '&#xe082;',
			'icon-grin-2' : '&#xe083;',
			'icon-cool' : '&#xe084;',
			'icon-cool-2' : '&#xe085;',
			'icon-angry' : '&#xe086;',
			'icon-angry-2' : '&#xe087;',
			'icon-evil' : '&#xe088;',
			'icon-evil-2' : '&#xe089;',
			'icon-shocked' : '&#xe08a;',
			'icon-shocked-2' : '&#xe08b;',
			'icon-confused' : '&#xe08c;',
			'icon-confused-2' : '&#xe08d;',
			'icon-neutral' : '&#xe08e;',
			'icon-neutral-2' : '&#xe08f;',
			'icon-wondering' : '&#xe090;',
			'icon-wondering-2' : '&#xe091;',
			'icon-point-up' : '&#xe092;',
			'icon-point-right' : '&#xe093;',
			'icon-point-down' : '&#xe094;',
			'icon-point-left' : '&#xe095;',
			'icon-warning' : '&#xe096;',
			'icon-notification' : '&#xe097;',
			'icon-question' : '&#xe098;',
			'icon-info' : '&#xe099;',
			'icon-info-2' : '&#xe09a;',
			'icon-blocked' : '&#xe09b;',
			'icon-cancel-circle' : '&#xe09c;',
			'icon-checkmark-circle' : '&#xe09d;',
			'icon-spam' : '&#xe09e;',
			'icon-close' : '&#xe09f;',
			'icon-checkmark' : '&#xe0a0;',
			'icon-checkmark-2' : '&#xe0a1;',
			'icon-spell-check' : '&#xe0a2;',
			'icon-minus' : '&#xe0a3;',
			'icon-plus' : '&#xe0a4;',
			'icon-enter' : '&#xe0a5;',
			'icon-exit' : '&#xe0a6;',
			'icon-play-2' : '&#xe0a7;',
			'icon-pause' : '&#xe0a8;',
			'icon-stop' : '&#xe0a9;',
			'icon-backward' : '&#xe0aa;',
			'icon-forward-2' : '&#xe0ab;',
			'icon-play-3' : '&#xe0ac;',
			'icon-pause-2' : '&#xe0ad;',
			'icon-stop-2' : '&#xe0ae;',
			'icon-backward-2' : '&#xe0af;',
			'icon-forward-3' : '&#xe0b0;',
			'icon-first' : '&#xe0b1;',
			'icon-last' : '&#xe0b2;',
			'icon-previous' : '&#xe0b3;',
			'icon-next' : '&#xe0b4;',
			'icon-eject' : '&#xe0b5;',
			'icon-volume-high' : '&#xe0b6;',
			'icon-volume-medium' : '&#xe0b7;',
			'icon-volume-low' : '&#xe0b8;',
			'icon-volume-mute' : '&#xe0b9;',
			'icon-volume-mute-2' : '&#xe0ba;',
			'icon-volume-increase' : '&#xe0bb;',
			'icon-volume-decrease' : '&#xe0bc;',
			'icon-loop' : '&#xe0bd;',
			'icon-loop-2' : '&#xe0be;',
			'icon-loop-3' : '&#xe0bf;',
			'icon-shuffle' : '&#xe0c0;',
			'icon-arrow-up-left' : '&#xe0c1;',
			'icon-arrow-up' : '&#xe0c2;',
			'icon-arrow-up-right' : '&#xe0c3;',
			'icon-arrow-right' : '&#xe0c4;',
			'icon-arrow-down-right' : '&#xe0c5;',
			'icon-arrow-down' : '&#xe0c6;',
			'icon-arrow-down-left' : '&#xe0c7;',
			'icon-arrow-left' : '&#xe0c8;',
			'icon-arrow-up-left-2' : '&#xe0c9;',
			'icon-arrow-up-2' : '&#xe0ca;',
			'icon-arrow-up-right-2' : '&#xe0cb;',
			'icon-arrow-right-2' : '&#xe0cc;',
			'icon-arrow-down-right-2' : '&#xe0cd;',
			'icon-arrow-down-2' : '&#xe0ce;',
			'icon-arrow-down-left-2' : '&#xe0cf;',
			'icon-arrow-left-2' : '&#xe0d0;',
			'icon-arrow-up-left-3' : '&#xe0d1;',
			'icon-arrow-up-3' : '&#xe0d2;',
			'icon-arrow-up-right-3' : '&#xe0d3;',
			'icon-arrow-right-3' : '&#xe0d4;',
			'icon-arrow-down-right-3' : '&#xe0d5;',
			'icon-arrow-down-3' : '&#xe0d6;',
			'icon-arrow-down-left-3' : '&#xe0d7;',
			'icon-arrow-left-3' : '&#xe0d8;',
			'icon-tab' : '&#xe0d9;',
			'icon-checkbox-checked' : '&#xe0da;',
			'icon-checkbox-unchecked' : '&#xe0db;',
			'icon-checkbox-partial' : '&#xe0dc;',
			'icon-radio-checked' : '&#xe0dd;',
			'icon-radio-unchecked' : '&#xe0de;',
			'icon-crop' : '&#xe0df;',
			'icon-scissors' : '&#xe0e0;',
			'icon-filter' : '&#xe0e1;',
			'icon-filter-2' : '&#xe0e2;',
			'icon-font' : '&#xe0e3;',
			'icon-text-height' : '&#xe0e4;',
			'icon-text-width' : '&#xe0e5;',
			'icon-bold' : '&#xe0e6;',
			'icon-underline' : '&#xe0e7;',
			'icon-italic' : '&#xe0e8;',
			'icon-strikethrough' : '&#xe0e9;',
			'icon-omega' : '&#xe0ea;',
			'icon-sigma' : '&#xe0eb;',
			'icon-table' : '&#xe0ec;',
			'icon-table-2' : '&#xe0ed;',
			'icon-insert-template' : '&#xe0ee;',
			'icon-pilcrow' : '&#xe0ef;',
			'icon-left-to-right' : '&#xe0f0;',
			'icon-right-to-left' : '&#xe0f1;',
			'icon-paragraph-left' : '&#xe0f2;',
			'icon-paragraph-center' : '&#xe0f3;',
			'icon-paragraph-right' : '&#xe0f4;',
			'icon-paragraph-justify' : '&#xe0f5;',
			'icon-paragraph-left-2' : '&#xe0f6;',
			'icon-paragraph-center-2' : '&#xe0f7;',
			'icon-paragraph-right-2' : '&#xe0f8;',
			'icon-paragraph-justify-2' : '&#xe0f9;',
			'icon-indent-increase' : '&#xe0fa;',
			'icon-indent-decrease' : '&#xe0fb;',
			'icon-new-tab' : '&#xe0fc;',
			'icon-embed' : '&#xe0fd;',
			'icon-code' : '&#xe0fe;',
			'icon-console' : '&#xe0ff;',
			'icon-share' : '&#xe100;',
			'icon-mail' : '&#xe101;',
			'icon-mail-2' : '&#xe102;',
			'icon-mail-3' : '&#xe103;',
			'icon-mail-4' : '&#xe104;',
			'icon-google' : '&#xe105;',
			'icon-google-plus' : '&#xe106;',
			'icon-google-plus-2' : '&#xe107;',
			'icon-google-plus-3' : '&#xe108;',
			'icon-google-plus-4' : '&#xe109;',
			'icon-google-drive' : '&#xe10a;',
			'icon-facebook' : '&#xe10b;',
			'icon-facebook-2' : '&#xe10c;',
			'icon-facebook-3' : '&#xe10d;',
			'icon-instagram' : '&#xe10e;',
			'icon-twitter' : '&#xe10f;',
			'icon-twitter-2' : '&#xe110;',
			'icon-twitter-3' : '&#xe111;',
			'icon-feed-2' : '&#xe112;',
			'icon-feed-3' : '&#xe113;',
			'icon-feed-4' : '&#xe114;',
			'icon-youtube' : '&#xe115;',
			'icon-youtube-2' : '&#xe116;',
			'icon-vimeo' : '&#xe117;',
			'icon-vimeo2' : '&#xe118;',
			'icon-vimeo-2' : '&#xe119;',
			'icon-lanyrd' : '&#xe11a;',
			'icon-flickr' : '&#xe11b;',
			'icon-flickr-2' : '&#xe11c;',
			'icon-flickr-3' : '&#xe11d;',
			'icon-flickr-4' : '&#xe11e;',
			'icon-picassa' : '&#xe11f;',
			'icon-picassa-2' : '&#xe120;',
			'icon-dribbble' : '&#xe121;',
			'icon-dribbble-2' : '&#xe122;',
			'icon-dribbble-3' : '&#xe123;',
			'icon-forrst' : '&#xe124;',
			'icon-forrst-2' : '&#xe125;',
			'icon-deviantart' : '&#xe126;',
			'icon-deviantart-2' : '&#xe127;',
			'icon-steam' : '&#xe128;',
			'icon-steam-2' : '&#xe129;',
			'icon-github' : '&#xe12a;',
			'icon-github-2' : '&#xe12b;',
			'icon-github-3' : '&#xe12c;',
			'icon-github-4' : '&#xe12d;',
			'icon-github-5' : '&#xe12e;',
			'icon-wordpress' : '&#xe12f;',
			'icon-wordpress-2' : '&#xe130;',
			'icon-joomla' : '&#xe131;',
			'icon-blogger' : '&#xe132;',
			'icon-blogger-2' : '&#xe133;',
			'icon-tumblr' : '&#xe134;',
			'icon-tumblr-2' : '&#xe135;',
			'icon-yahoo' : '&#xe136;',
			'icon-tux' : '&#xe137;',
			'icon-apple' : '&#xe138;',
			'icon-finder' : '&#xe139;',
			'icon-android' : '&#xe13a;',
			'icon-windows' : '&#xe13b;',
			'icon-windows8' : '&#xe13c;',
			'icon-soundcloud' : '&#xe13d;',
			'icon-soundcloud-2' : '&#xe13e;',
			'icon-skype' : '&#xe13f;',
			'icon-reddit' : '&#xe140;',
			'icon-linkedin' : '&#xe141;',
			'icon-lastfm' : '&#xe142;',
			'icon-lastfm-2' : '&#xe143;',
			'icon-delicious' : '&#xe144;',
			'icon-stumbleupon' : '&#xe145;',
			'icon-stumbleupon-2' : '&#xe146;',
			'icon-stackoverflow' : '&#xe147;',
			'icon-pinterest' : '&#xe148;',
			'icon-pinterest-2' : '&#xe149;',
			'icon-xing' : '&#xe14a;',
			'icon-xing-2' : '&#xe14b;',
			'icon-flattr' : '&#xe14c;',
			'icon-foursquare' : '&#xe14d;',
			'icon-foursquare-2' : '&#xe14e;',
			'icon-paypal' : '&#xe14f;',
			'icon-paypal-2' : '&#xe150;',
			'icon-paypal-3' : '&#xe151;',
			'icon-yelp' : '&#xe152;',
			'icon-libreoffice' : '&#xe153;',
			'icon-file-pdf' : '&#xe154;',
			'icon-file-openoffice' : '&#xe155;',
			'icon-file-word' : '&#xe156;',
			'icon-file-excel' : '&#xe157;',
			'icon-file-zip' : '&#xe158;',
			'icon-file-powerpoint' : '&#xe159;',
			'icon-file-xml' : '&#xe15a;',
			'icon-file-css' : '&#xe15b;',
			'icon-html5' : '&#xe15c;',
			'icon-html5-2' : '&#xe15d;',
			'icon-css3' : '&#xe15e;',
			'icon-chrome' : '&#xe15f;',
			'icon-firefox' : '&#xe160;',
			'icon-IE' : '&#xe161;',
			'icon-opera' : '&#xe162;',
			'icon-safari' : '&#xe163;',
			'icon-IcoMoon' : '&#xe164;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};