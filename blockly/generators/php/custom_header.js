Blockly.PHP['navbar'] = function(block) {
    var value_text_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);
    var value_background_color = Blockly.PHP.valueToCode(block, 'background_color', Blockly.PHP.ORDER_NONE);
    var statements_navbar_child = Blockly.PHP.statementToCode(block, 'navbar_child');

    var code = `<nav class="navbar" style="${value_text_style} ${value_background_color}"> </nav>`;

    return code;
  };


  Blockly.PHP['header'] = function(block) {
    var statements_header_content = Blockly.PHP.statementToCode(block, 'header_content');

    var code = `<header>${statements_header_content}</header>`;

    return code;
  };