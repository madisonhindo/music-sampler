 $(document).ready(function() {
  function hideAll() {
    $('#mirrorMaster').hide();
    $('#homeOfStrange').hide();
    $('#mindOverMatter').hide();
    $('#youngTheGiant').hide();
    $('#spTitle').hide()
    $('#stTitle').hide()
    $('#timeTitle').hide()
    $('#syrupTitle').hide()
}

  hideAll();

$('.albumCover').click(function() {
    hideAll();
    switch ($(this).attr("id")) {
      case 'mmCover':
        $('#mirrorMaster').show();
        $('#spTitle').slideToggle();
        break;
      case 'homeCover':
        $('#homeOfStrange').show();
        $('#stTitle').slideToggle();
        break;
      case 'mindCover':
        $('#mindOverMatter').show();
        $('#timeTitle').slideToggle();
        break;
      case 'ytgCover':
        $('#youngTheGiant').show();
        $('#syrupTitle').slideToggle();
        break;
    }

    $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
  });
/*
  $('.albumCover').click(function() {
    $('#music').slideToggle();
  });
*/
  });
