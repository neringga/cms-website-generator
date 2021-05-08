var option_demo = 0;


$(document).ready(function () {
  $("#iframe_wordpress").hide();

  $("#option_code").on("change", function () {
    $("#codearea").show();
    $("#iframe_wordpress").hide();
  });

  $("#option_demo_wp").on("change", function () {
    $("#codearea").hide();
    $("#iframe_wordpress").show();

    option_demo = 0;
  });

  $("#option_demo_joomla").on("change", function () {
    $("#codearea").hide();

    option_demo = 2;
  });

  $("#option_demo_drupal").on("change", function () {
    $("#codearea").hide();

    option_demo = 1;
  });
});

function onReload() {
  var code = Blockly.PHP.workspaceToCode(workspace);

  var begin= `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
            <script>
              var option_demo = ${option_demo};
            </script>
          </head>
          <body>`;

    var end = `</body></html>`;

    var fileName = "index.html";
    // if (option_demo == 1) {
    //     fileName = "page.html.twig";
    // }
        
   updateTheme(fileName, begin + code + end);

   updateTheme("workspace.txt", Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)));

  // if (workspace.allInputsFilled() && $("#iframe_wordpress").is(":visible")) {
  //   var blocks = workspace.getTopBlocks();
  //   for (var i = 0; i < blocks.length; i++) {
  //         var blockCode = Blockly.PHP.blockToCode(blocks[i]);

  //         var begin= `<!DOCTYPE html>
  //         <html lang="en">
  //         <head>
  //           <meta charset="utf-8">
  //           <meta name="viewport" content="width=device-width, initial-scale=1">
  //           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  //           <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  //           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
  //           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  //           <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
  //           <script>
  //             var option_demo = ${option_demo};
  //           </script>
  //         </head>
  //         <body>`;

  //         var end = `</body>
  //         </html>`;

  //         var fileName = "index.php";
  //         if (option_demo == 1) {
  //             fileName = "page.html.twig";
  //         }
        
  //         updateTheme(fileName, begin + blockCode + end)
  //   }
  // }
}

function onWorkspaceChange(event) {
  var code = Blockly.PHP.workspaceToCode(workspace);
  document.getElementById("codearea").value = code;
}

// function showCode() {
//   var blocks = workspace.getTopBlocks();
//   var zip = new JSZip();

//   // patikrinti ar yra index. jei nera - negeneruoti

//   for (var i = 0; i < blocks.length; i++) {
//     var blockName = blocks[i].type + ".php";
//     var blockCode = Blockly.PHP.blockToCode(blocks[i]);

//     zip.file(blockName, blockCode);
//   }

//   zip.file(
//     "style.css",
//     `/*
//                           Theme Name: New Theme
//                           Author: Neringa
//                           */`
//   );

//   zip.generateAsync({ type: "blob" }).then(function (content) {
//     saveAs(content, "theme.zip");
//   });
// }

function updateTheme(fileName, fileContent) {
  var request = {
    type: option_demo,
    title: fileName,
    content: fileContent,
  };

  $.ajax({
    type: "post",
    contentType: "application/json; charset=utf-8",
    url: `https://localhost:44385/api/themeUpdating`,
    data: JSON.stringify(request),
    success: function (status) {
      document.getElementById("iframe_wordpress").src = document.getElementById("iframe_wordpress").src;
    },
    error: function (err) {
      console.log(err);
    },
  });

}