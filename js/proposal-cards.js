var titleColorOn = '#d9d9d9';
var titleColorOff = '#0d0d0d';
var imgOpacityOn = '1';
var imgOpacityOff = '0.5';

$('#cardPhotography').mouseenter(() => {$('#imagePhotography').css({'opacity': imgOpacityOn})
                                    $('#titlePhotography').css({'color': titleColorOn})});
$('#cardPhotography').mouseleave(() => {$('#imagePhotography').css({'opacity': imgOpacityOff})
                                    $('#titlePhotography').css({'color': titleColorOff})});

$('#cardVideo').mouseenter(() => {$('#imageVideo').css({'opacity': imgOpacityOn})
                                $('#titleVideo').css({'color': titleColorOn})
                                $('#video-aux').css({display: 'block'})});
$('#cardVideo').mouseleave(() => {$('#imageVideo').css({'opacity': imgOpacityOff})
                                $('#titleVideo').css({'color': titleColorOff})
                                $('#video-aux').css({display: 'none'})});

$('#cardEdition').mouseenter(() => {$('#imageEdition').css({'opacity': imgOpacityOn})
                                    $('#titleEdition').css({'color': titleColorOn})
                                    $('#edition-aux').css({display: 'block'})});
$('#cardEdition').mouseleave(() => {$('#imageEdition').css({'opacity': imgOpacityOff})
                                    $('#titleEdition').css({'color': titleColorOff})
                                    $('#edition-aux').css({display: 'none'})});
