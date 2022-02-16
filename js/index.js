console.log('Hello world!');

var lists = [
    {
        name: 'Piano Triennale',
    },
    {
        name: 'Developers',
    },
    {
        name: 'Designers',
    },
    {
        name: 'Forum',
    },
    {
        name: 'Docs',
    },
    {
        name: 'GitHub',
    },
    {
        name: 'ITA',
        symbol: '&#9660;'
    }
];

var socials = [
    {
        src: 'img/cart.png'
    },
    {
        src: 'img/user.png'
    },
    {
        src: 'img/heart.png'
    },
    {
        src: 'img/user.png'
    }
];

var menu = [
    {
        item: 'Piattaforme'
    },
    {
        item: 'Software'
    },
    {
        item: 'API'
    }
];

var asideMenu = [
    {
        item: 'Come lo uso'
    },
    {
        item: 'Come partecipo'
    },
    {
        item: 'News'
    },
    {
        item: 'Contatti'
    }
];

$('#asideMenu').html(doT.template($('#asideMenu-template').html())({asideMenu: asideMenu}));
$('#menu').html(doT.template($('#menu-template').html())({menu: menu}));
$('#socials').html(doT.template($('#socials-template').html())({socials: socials}));
$('#list').html(doT.template($('#list-template').html())({lists: lists}));

