$('.js-data-example-ajax').select2({
    ajax: {
        url: '{{ url("/data") }}',
        dataType: 'json',
        tags: true,
        multiple: true,
        minimumInputLength: 3,
        processResults: function (data) {
            return {
                results: data.tags
            };
        }
    }
}); 

.select2-container--default .select2-selection--multiple .select2-selection__rendered li{
  color:#000;
}


// $array = [ 'tags' => [
//          [
//             "id" => 1,
//             "text" => 'mohit'
//         ] ,
//         [
//             "id" => 2,
//             "text" => 'ankit'
//         ],
//         [
//             "id" => 3,
//             "text" => 'rohit'
//         ]
//     ]
// ];
