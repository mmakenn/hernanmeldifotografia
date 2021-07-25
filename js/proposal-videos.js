function showVideo(video, textAux){
    $(video).fadeToggle(function(){
        if ($(textAux).html() == 'Click para ver video.'){
            $(textAux).html('Click para ocultar video.');
        }else{
            resetRoom();
            $(textAux).html('Click para ver video.');
        }
    });
}

$('#cardVideo').click(() => {showVideo('#productionVideo', '#video-aux');});

$('#cardEdition').click(() => {showVideo('#editionVideo', '#edition-aux');});