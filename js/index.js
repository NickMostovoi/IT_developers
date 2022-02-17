console.log('Hello world!');

var lists = [
    {
        name: 'Piano Triennale',
        state: 'isActive'
    },
    {
        name: 'Developers'
    },
    {
        name: 'Designers'
    },
    {
        name: 'Forum'
    },
    {
        name: 'Docs'
    },
    {
        name: 'GitHub'
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

var platform = [
    {
        img: 'img/logo-cie.png',
        title: 'CIE',
        text: 'Carta Identità Elettronica',
        link: '#'
    },
    {
        img: 'img/logo-spid.png',
        title: 'SPID',
        text: 'Sistema Pubblico di Identità Digitale',
        link: '#'
    },
    {
        img: 'img/logo-cie.png',
        title: 'pagoPA',
        text: 'Nodo di pagamento verso la Pubblica',
        link: '#'
    },
    {
        img: 'img/logo-spid.png',
        title: 'indicePA',
        text: 'Indice della Pubblica Amministrazione',
        link: '#'
    }
];

var software = [
    {
        description: 'SOFTWARE A RIUSO',
        img: 'img/TAIF.png',
        title: 'DAE RespondER',
        text: 'Sistema software modulare, in supporto alla gestione arresto  cardiaco-respiratorio (ACR)',
        link: '#'
    },
    {
        description: 'SOFTWARE RIUSO A RIUSO',
        img: 'img/cover_softwareriuso.png',
        title: 'uniCMS - Unical storage API handler',
        text: 'Sistema Pubblico di Identità Digitale',
        link: '#'
    },
    {
        description: 'SOFTWARE OPEN SOURCE',
        img: 'img/TAIF.png',
        title: 'La Stanza del Cittadino',
        text: 'Nodo di pagamento verso la Pubblica',
        link: '#'
    },
    {
        description: 'SOFTWARE OPEN',
        img: 'img/cover_softwareriuso.png',
        title: 'TAIF',
        text: 'Albo delle Imprese e degli Operatori Professionali Forestali',
        link: '#'
    }
];

$('#asideMenu').html(doT.template($('#asideMenu-template').html())({asideMenu: asideMenu}));
$('#menu').html(doT.template($('#menu-template').html())({menu: menu}));
$('#socials').html(doT.template($('#socials-template').html())({socials: socials}));
$('#list').html(doT.template($('#list-template').html())({lists: lists}));
$('#platform').html(doT.template($('#platform-template').html())({platform: platform}));
$('#software').html(doT.template($('#software-template').html())({software: software}));

$('.fn-list').on('click', function(e) {
    if (e.target.className === 'link link_color_white list__link') {
        $('.fn-list .isActive').removeClass('isActive');
        $(e.target).parent().addClass('isActive');
    }
});
