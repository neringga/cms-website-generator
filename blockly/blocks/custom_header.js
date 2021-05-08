Blockly.defineBlocksWithJsonArray([
  {
    "type": "navbar",
    "message0": "Navigation menu %1 Text %2 %3 Style %4 Components %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "text_color",
        "options": [
          [
            "light",
            "dark"
          ],
          [
            "dark",
            "light"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "style"
      },
      {
        "type": "input_statement",
        "name": "content"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "navbar_brand",
    "message0": "Navigation Menu Title %1 Components %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "components"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "navbar_nav_items",
    "message0": "Navigation Items",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "header",
    "message0": "HEADER %1 Size %2 Style %3 Components %4",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "size"
      },
      {
        "type": "input_value",
        "name": "style"
      },
      {
        "type": "input_statement",
        "name": "content"
      }
    ],
    "inputsInline": false,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "content",
    "message0": "BODY %1 Components %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "components"
      }
    ],
    "inputsInline": false,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "posts",
    "message0": "Posts %1 Post content items %2 Posts per page %3 %4 Post display style %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "post",
        "check": [
          "item_title",
          "item_content",
          "item_excerpt"
        ]
      },
      {
        "type": "field_number",
        "name": "posts_per_page",
        "value": 10,
        "min": 1,
        "precision": 1
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "post_style",
        "check": "display_style"
      }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "footer",
    "message0": "FOOTER %1 Position %2 %3 Style %4 %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "position",
        "options": [
          [
            "sticky",
            "sticky-bottom"
          ],
          [
            "fixed",
            "fixed-bottom"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "style"
      },
      {
        "type": "input_statement",
        "name": "components"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
]);
