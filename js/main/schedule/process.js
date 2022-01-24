// $(document).ready(function() {
//     setTimeout(function() {
//         fetch_all_location();
//     }, 100);

//     function fetch_all_location() {
//         var fep_action = "fetch_all_location";
//         $.ajax({
//             url: "./modules/profile.php",
//             method: "POST",
//             data: { action: fep_action },
//             success: function(response) {
//                 $("#from_loc_data").html(response);
//             }
//         });
//     }
// });
//$(document).ready(function() {


//});
//* search available schedule & filter selected
$(document).ready(function() {
    //* fetch search schedules
    $('#search_sched_form').validate();
    $('#srch_sched_btn').click(function(e) {
        if (document.querySelector('#search_sched_form').checkValidity()) {
            e.preventDefault();
            $(':input[type="submit"]').prop('disabled', true);
            $.ajax({
                url: './modules/schedule/process.php',
                method: 'POST',
                data: $('#search_sched_form').serialize() + '&action=search_sched_form',
                success: function(response) {
                    setTimeout(function() {
                        $("#srch_sched_ftr_form").html(response);
                    }, 100);
                    setTimeout(function() {
                        $(':input[type="submit"]').prop('disabled', false);
                    }, 100);
                }
            });
        }
    });

    //* fetch summary selected schedule
    $('#srch_sched_ftr_form').submit(function(e) {
        e.preventDefault();
        $(':input[type="submit"]').prop('disabled', true);
        $.ajax({
            url: './modules/schedule/process.php',
            method: 'POST',
            data: $('#srch_sched_ftr_form').serialize() + '&action=srch_sched_ftr_form',
            success: function(data) {
                setTimeout(function() {
                    $("#smmry_dptr_slctd_sched_form").html(data);
                }, 100);
                setTimeout(function() {
                    $(':input[type="submit"]').prop('disabled', false);
                }, 100);
            }
        });
    });

    //* submit reservation
    $('#smmry_dptr_slctd_sched_form').submit(function(e) {
        e.preventDefault();
        $(':input[type="submit"]').prop('disabled', true);
        $.ajax({
            url: './modules/schedule/process.php',
            method: 'POST',
            data: $('#smmry_dptr_slctd_sched_form').serialize() + '&action=smmry_dptr_slctd_sched_form',
            success: function(response) {
                setTimeout(function() {
                    alert(response);
                }, 100);
                setTimeout(function() {
                    $(':input[type="submit"]').prop('disabled', false);
                }, 100);
                setTimeout(function() {
                    window.location.reload();
                }, 100);
            }
        });
    });

    // this is the fucking accomodation price
    // $('.calculate').change(function() {
    //     var total = 0;
    //     $('.calculate').each(function() {
    //         if($(this).val() != 0) {
    //             total += parseFloat($(this).val());
    //         }
    //     });
    //     $('#priceInput').text('P' + total.toFixed(2));
    //     console.log(total);
    // });

    var priceMaterial = document.getElementById("price_material");

$("#slct_accomm_type").on('change', function() {
  var txt = $(this).find('option:selected').data('price');
  $priceMaterial.text(txt);
  console.log(txt);
});
    
});