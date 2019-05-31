/*
    HELP scripts 


click function 
$( document ).on( 'click', '', function ( e ) {
    // body...
} );
*/

// main application script file - afs.main.js
"use strict";
/*if (/Edge/.test(navigator.userAgent)) {
    alert('Hello Microsoft User!');
}*/
// if ( navigator.userAgent.match( /msie/i ) || navigator.userAgent.match( /trident/i ) || navigator.userAgent.match( /Edge/i ) ){
if ( navigator.userAgent.match( /msie/i ) || navigator.userAgent.match( /trident/i ) ){
    document.documentElement.setAttribute( 'data-useragent', navigator.userAgent );
} else {
    /* what is theme */
    var currentTheme = localStorage.getItem( 'theme' );
    if ( typeof currentTheme !== 'undefined' && currentTheme === "dark" ) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('theme');
    };
};


$(function () {
    /* === Common Script :: START */
    $( document ).on( 'click', function ( e ) {
        //++ closing language popup on anywhere click 
        $( 'a.btnchange-language' ).siblings( 'div.dl-language' ).removeClass( 'dl-lang-showing' );
        setTimeout(function () {
            $( 'a.btnchange-language' ).removeClass( 'ct-active' );
        }, 600);
    } );
    /* -- form input control click */
    $( document ).on( 'click', 'div.form-controller', function ( e ) {
        $( this ).children( 'input' ).focus();
        $( this ).children( 'select' ).focus();
        $( this ).children( 'textarea' ).focus();
    } );
    /* -- form input control - input text */
    $( 'body' ).on( 'focus', 'div.form-controller>input', function ( e ) {
        if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'disabled' ) ) {
            if ( !$( this ).parent( 'div.form-controller' ).hasClass( 'control-active' ) ) {
                $( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
            }
        } else {
            $( this ).attr( 'disabled', 'disabled' );
        }
    } );
    /* -- form input control - input text blur */
    $( 'body' ).on( 'blur', 'div.form-controller>input', function ( e ) {
        $( this ).parent( 'div.form-controller' ).removeClass( 'control-active' );
    } );
    /* -- form input control - select */
    $( 'body' ).on( 'focus', 'div.form-controller>div>select', function ( e ) {
        if ( !$( this ).closest( 'div.form-controller' ).hasClass( 'disabled' ) ) {
            if ( !$( this ).closest( 'div.form-controller' ).hasClass( 'control-active' ) ) {
                //$( 'div.form-controller' ).removeClass( 'control-active' );
                $( this ).closest( 'div.form-controller' ).addClass( 'control-active' );
            }
        } else {
            $( this ).attr( 'disabled', 'disabled' );
        }
    } );
    /* -- form input control - select blur */
    $( 'body' ).on( 'blur', 'div.form-controller>div>select', function ( e ) {
        $( this ).closest( 'div.form-controller' ).removeClass( 'control-active' );
    } );

    /* -- change theme of application */
    $( document ).on( 'click', 'ul.lst-page-tools>li>a.btnchange-theme', function ( e ) {
        if (!document.documentElement.hasAttribute('theme')) {
            document.documentElement.setAttribute('theme', 'dark');
            $( this ).html( '<i></i><span>Switch To</span>Light Theme' );
            localStorage.setItem( 'theme', 'dark' );
        } else {
            document.documentElement.removeAttribute('theme');
            $( this ).html( '<i></i><span>Switch To</span>Dark Theme' );
            localStorage.setItem( 'theme', 'light' );
        }
        // $(this)[0].hasAttribute("name");
    } );
    $( document ).on( 'click', 'div.lh-elements a.lhe-chtheme', function ( e ) {
        $( 'ul.lst-page-tools>li>a.btnchange-theme' ).trigger( 'click' );
    } );
    /* -- change language show lang dropdown */
    $( document ).on( 'click', 'ul.lst-page-tools>li>a.btnchange-language', function ( e ) {
        e.stopPropagation();
        if ( !$( this ).hasClass( 'ct-active' ) ) {
            $( this ).addClass( 'ct-active' );
            $( this ).siblings( 'div.dl-language' ).addClass( 'dl-lang-showing' );
        } else {
            $( this ).removeClass( 'ct-active' );
            $( this ).siblings( 'div.dl-language' ).removeClass( 'dl-lang-showing' );
        }
    } );
    /* -- language selection - select language */
    $( document ).on( 'click', 'ul.lst-page-tools div.dl-language>a', function ( e ) {
        if ( !$( this ).hasClass( 'lang-selected' ) ) {
            $( 'ul.lst-page-tools div.dl-language>a' ).removeClass( 'lang-selected' );
            $( this ).addClass( 'lang-selected' );
            var selectedLanguage = $( this ).text();
            $( 'a.btnchange-language' ).html( '<i></i><span>Change Language</span>' + selectedLanguage );
            $( this ).siblings( 'div.dl-language' ).removeClass( 'dl-lang-showing' );
            setTimeout(function () {
                $( 'a.btnchange-language' ).removeClass( 'ct-active' );
            }, 600);
        }
    } );
    /* go to top of page */
    $( 'body' ).on( 'click', 'a.btngotop', function ( e ) {
        $( 'html, body' ).animate( { scrollTop: 0 }, 400 );
    } );
    /* -- header compress when scroll */
    $( window ).on( 'scroll', function ( e ) {
        if ( $( window ).scrollTop() > 119 ) {
            $( 'a.btngotop' ).fadeIn();
        }
        else {
            $( 'a.btngotop' ).fadeOut();
        }
    });
    /* === Common Script :: END   */

    /* === Login Page :: START */
    /* -- language selection - show dropdown */
    $( document ).on( 'click', 'div.lhe-lang>a', function ( e ) {
        if ( !$( this ).hasClass( 'lang-active' ) ) {
            $( this ).addClass( 'lang-active' );
            $( this ).siblings( 'div.dl-language' ).addClass( 'dl-lang-showing' );
        } else {
            $( this ).removeClass( 'lang-active' );
            $( this ).siblings( 'div.dl-language' ).removeClass( 'dl-lang-showing' );
        }
    } );
    /* -- language selection - select language */
    $(document).on('click', 'div.lhe-lang div.dl-language>a', function (e) {
        if ( !$(this).hasClass('lang-selected') ) {
            $( 'div.lhe-lang div.dl-language>a' ).removeClass( 'lang-selected' );
            $( this ).addClass( 'lang-selected' );
            var selectedLanguage = $ (this ).text();
            $( 'div.lhe-lang>a' ).text( selectedLanguage ).removeClass( 'lang-active' );
            $( this ).closest( 'div.dl-language' ).removeClass( 'dl-lang-showing' );
        }
    });
    /* === Login Page :: END   */
});
