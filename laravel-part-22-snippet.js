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
