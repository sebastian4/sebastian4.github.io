$(document).ready(function() {
  ////

  console.log("start");

  let letters = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let numbers = [
    '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25',
    '30',
    '31', '32', '40', '50', 
    '100', '200'
  ];

  // '', '', '', '', '',

  ////

  function generate(itsArray) {
    console.log("generate");

    var number_of_rows = 10;
    var number_of_cols = 10;

    var table_body = '<table border="1">';
    for(var i=0;i<number_of_rows;i++){
      table_body+='<tr>';
      for(var j=0;j<number_of_cols;j++){
          table_body +='<td class="cell">';

          var randomItem = itsArray[Math.floor(Math.random()*itsArray.length)];

          table_body +=randomItem;
          table_body +='</td>';
      }
      table_body+='</tr>';
    }
    table_body+='</table>';

    $('#tableDiv').html(table_body);

  }

  ////

  generate(letters);

  $("#small-letters").click(function(){
    console.log("small-letters");
    generate(letters);
  });

  $("#big-letters").click(function(){
    console.log("big-letters");
    var array2 = letters.map(function(x){ return x.toUpperCase() })
    generate(array2);
  });

  $("#big-numbers").click(function(){
    console.log("big-numbers");
    generate(numbers);
  });

  ////

});
