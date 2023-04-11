$('#ver-video').click(function() {
    $.fancybox.open({
      type: 'iframe',
      src: 'https://youtu.be/vTkUlqFqWpc'
    });
  });


  $('#ver-mapa').click(function() {
    $.fancybox.open({
      type: 'iframe',
      src: 'https://goo.gl/maps/8jbLMS64S54tuTgu8'
    });
  });


  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });