$(function () {
    $('input[type="checkbox"]').change(function () {
        let amenities = [];
        $('input[type="checkbox"]:checked').each(function () {
            amenities.push($(this).attr('data-name'));
        });
        if (amenities.length > 0) {
            $('.amenities h4').text(amenities.join(', '));
        } else {
            $('.amenities h4').html('&nbsp;');
        }
    })
  });
