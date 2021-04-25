Blockly.defineBlocksWithJsonArray([
  {
    type: "navbar",
    message0: "NAVBAR %1 Text style %2 Background color %3 Content %4",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "text_style",
      },
      {
        type: "input_value",
        name: "background_color",
      },
      {
        type: "input_statement",
        name: "navbar_child",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Style how to show your menu",
    helpUrl: "",
  },
  {
    type: "header",
    message0: "HEADER %1 Content %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "header_content",
      },
    ],
    colour: 120,
    tooltip: "",
    helpUrl: "",
  },
]);
