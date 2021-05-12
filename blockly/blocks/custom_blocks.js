Blockly.defineBlocksWithJsonArray([ 
  {
    "type": "button",
    "message0": "Button %1 Size %2 %3 Text %4 Style %5",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "field_dropdown",
        "name": "size",
        "options": [
          [
            "small",
            "btn-sm"
          ],
          [
            "medium",
            ""
          ],
          [
            "large",
            "btn-lg"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "text"
      },
      {
        "type": "input_value",
        "name": "style"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "background_color",
    "message0": "Background color %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_dummy"
      }
    ],
    "output": null,
    "colour": 259,
    "tooltip": "",
    "helpUrl": ""
  },
    {
        "type": "page_content",
        "message0": "Assigned page content",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "text_custom",
        "message0": "Text %1 Text style %2 Margins %3",
        "args0": [
          {
            "type": "input_value",
            "name": "text"
          },
          {
            "type": "input_value",
            "name": "text_style"
          },
          {
            "type": "input_value",
            "name": "margins"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "image",
        "message0": "Image URL %1 Opacity %2 %3 Width %4 Height %5",
        "args0": [
          {
            "type": "input_value",
            "name": "image_url",
            "check": "String"
          },
          {
            "type": "field_number",
            "name": "image_opacity",
            "value": 0,
            "min": 0,
            "max": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "width",
            "check": ["pixels", "percents"]
          },
          {
            "type": "input_value",
            "name": "height",
            "check": ["pixels", "percents"]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "search_field",
        "message0": "Search field",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "records",
        "message0": "Records %1 Record display style %2 Record content items %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "display_style",
            "check": "display_style"
          },
          {
            "type": "input_statement",
            "name": "item_configuration",
            "check": [
              "item_title",
              "item_content",
              "item_excerpt"
            ]
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Records that are displayed in archive or search result page",
        "helpUrl": ""
      },
      {
        "type": "empty_statement",
        "message0": "Empty",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "Insert this block to indicate that no child items will be added",
        "helpUrl": ""
      },
      {
        "type": "navigation_menu",
        "message0": "Navigation menu %1 Alignment %2 %3 Text style %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "alignment",
            "options": [
              [
                "left",
                "flex-right"
              ],
              [
                "right",
                "flex-end"
              ],
              [
                "center",
                "center"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style",
            "check": [
              "text_style",
              "empty_value"
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "navigation",
        "message0": "Menu %1 Display location: %2 %3 Text style %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "nav_menu_name",
            "options": [
              [
                "Menu A",
                "header-menu"
              ],
              [
                "Menu B",
                "footer-menu"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style"
          }
        ],
        "output": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      }
]);

Blockly.defineBlocksWithJsonArray([ 
    {
        "type": "text_style",
        "message0": "Font family %1 Font style %2 %3 Font weight %4 %5 Font size %6 px %7 Font color %8 Background color %9 Alignment %10 %11 Text transformation %12",
        "args0": [
          {
            "type": "input_value",
            "name": "font_family",
            "check": "String"
          },
          {
            "type": "field_dropdown",
            "name": "font_style",
            "options": [
              [
                "Normal",
                "normal"
              ],
              [
                "Italic",
                "italic"
              ],
              [
                "Oblique",
                "oblique"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "font_weight",
            "options": [
              [
                "Normal",
                "normal"
              ],
              [
                "Bold",
                "bold"
              ],
              [
                "Light",
                "lighter"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "font_size",
            "value": 12,
            "min": 0
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "font_color",
            "check": "Colour"
          },
          {
            "type": "input_value",
            "name": "background_color",
            "check": "Colour"
          },
          {
            "type": "field_dropdown",
            "name": "alignment",
            "options": [
              [
                "Left",
                "left"
              ],
              [
                "Center",
                "center"
              ],
              [
                "Right",
                "right"
              ],
              [
                "Justify",
                "justify"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "transformation",
            "options": [
              [
                "None",
                "0"
              ],
              [
                "Uppercase",
                "uppercase"
              ],
              [
                "Lowercase",
                "lowercase"
              ],
              [
                "Capitalize",
                "capitalize"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 259,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "content_margin",
        "message0": "Margins %1 Left margin %2 Right margin %3 Top margin %4 Bottom margin %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "left_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "right_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "top_margin",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "bottom_margin",
            "check": [
              "pixels",
              "percents"
            ]
          }
        ],
        "output": null,
        "colour": 259,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "pixels",
        "message0": "%1 px",
        "args0": [
          {
            "type": "field_number",
            "name": "pixels",
            "value": 0,
            "min": 0
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "percents",
        "message0": "%1 %%",
        "args0": [
          {
            "type": "field_number",
            "name": "percents",
            "value": 0,
            "min": 0,
            "max": 100
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "display_style",
        "message0": "Display style %1 Margins %2 Padding %3 Border %4 Background color %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "margins",
            "check": "content_margin"
          },
          {
            "type": "input_value",
            "name": "padding",
            "check": "padding"
          },
          {
            "type": "input_value",
            "name": "border",
            "check": "border"
          },
          {
            "type": "input_value",
            "name": "background",
            "check": "Colour"
          }
        ],
        "output": null,
        "colour": 165,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "border",
        "message0": "Border %1 Border style %2 %3 Border width %4 Border color %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "border_style",
            "options": [
              [
                "dotted",
                "dotted"
              ],
              [
                "double",
                "double"
              ],
              [
                "groove",
                "groove"
              ],
              [
                "ridge",
                "ridge"
              ],
              [
                "inset",
                "inset"
              ],
              [
                "hidden",
                "hidden"
              ],
              [
                "dashed",
                "dashed"
              ],
              [
                "outset",
                "outset"
              ],
              [
                "none",
                "none"
              ],
              [
                "solid",
                "solid"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "border_width",
            "check": "pixels"
          },
          {
            "type": "input_value",
            "name": "border_color"
          }
        ],
        "output": null,
        "colour": 259,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "padding",
        "message0": "Padding %1 Left padding %2 Right padding %3 Top padding %4 Bottom padding %5",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "left",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "right",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "top",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "bottom",
            "check": [
              "pixels",
              "percents"
            ]
          }
        ],
        "output": null,
        "colour": 259,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "empty_value",
        "message0": "Empty",
        "output": null,
        "colour": 165,
        "tooltip": "Empty value. No value will be added",
        "helpUrl": ""
      },
      {
        "type": "hex_color_code",
        "message0": "Hex colour code %1",
        "args0": [
          {
            "type": "field_input",
            "name": "hex_colour",
            "text": "#000000"
          }
        ],
        "output": null,
        "colour": 15,
        "tooltip": "Enter hex colour code",
        "helpUrl": ""
      },
      {
        "type": "size",
        "message0": "Size %1 Width %2 Height %3",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "width",
            "check": [
              "pixels",
              "percents"
            ]
          },
          {
            "type": "input_value",
            "name": "height",
            "check": [
              "pixels",
              "percents"
            ]
          }
        ],
        "output": null,
        "colour": 259,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "vertical_alignment",
        "message0": "Vertical alignment %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "option",
            "options": [
              [
                "top",
                "d-flex align-items-start"
              ],
              [
                "center",
                "d-flex align-items-center"
              ],
              [
                "bottom",
                "d-flex align-items-end"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
]);

Blockly.defineBlocksWithJsonArray([ 
    {
        "type": "item_title",
        "message0": "Item title %1 Text style %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style"
          },
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "item_content",
        "message0": "Item content %1 Max characters %2 %3 Text style %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_number",
            "name": "max_chars",
            "value": 256,
            "min": 1,
            "precision": 1
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style"
          },
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "item_excerpt",
        "message0": "Item excerpt %1 Text style %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "text_style"
          },
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
]);

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
      "message0": "HEADER %1 Position %2 %3 Style %4 Components %5",
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
              "sticky-top"
            ],
            [
              "fixed",
              ""
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
      "inputsInline": false,
      "colour": 120,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "content",
      "message0": "CONTENT %1 Style %2 Components %3",
      "args0": [
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
      "inputsInline": false,
      "colour": 120,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "posts",
      "message0": "Posts %1 Posts per row %2 %3 Style %4 Post content items %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "posts_per_line",
          "value": 1,
          "min": 1,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "post_style"
        },
        {
          "type": "input_statement",
          "name": "post",
          "check": [
            "item_title",
            "item_content",
            "item_excerpt"
          ]
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

  Blockly.defineBlocksWithJsonArray([ 
    {
      "type": "column",
      "message0": "Column %1 Align %2 %3 Width number %4 %5 %6",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "align",
          "options": [
            [
              "left",
              "text-align: left;"
            ],
            [
              "center",
              "text-align: center;"
            ],
            [
              "right",
              "text-align: right;"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_number",
          "name": "width",
          "value": 6,
          "min": 1,
          "max": 12,
          "precision": 1
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "input"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 300,
      "tooltip": "",
      "helpUrl": ""
    },
      {
        "type": "row",
        "message0": "Row %1 Align %2 %3 %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_dropdown",
            "name": "align",
            "options": [
              [
                "left",
                "justify-content-start"
              ],
              [
                "right",
                "justify-content-end"
              ],
              [
                "center",
                "justify-content-center"
              ],
              [
                "around",
                "justify-content-around"
              ],
              [
                "between",
                "justify-content-between"
              ],
              [
                "evenly",
                "justify-content-evenly"
              ]
            ]
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "input"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 300,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "container",
        "message0": "Container %1 %2",
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
]);



Blockly.defineBlocksWithJsonArray([ 
    {
      "type": "home",
      "message0": "Home %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "page",
      "message0": "Single page %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "single",
      "message0": "Single post %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "archive",
      "message0": "Archive %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "404",
      "message0": "404 page %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "index",
      "message0": "Index %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "input",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "search",
      "message0": "Search %1 Display style %2 %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "display_style",
          "check": "display_style"
        },
        {
          "type": "input_statement",
          "name": "content",
          "align": "CENTRE"
        }
      ],
      "colour": 270,
      "tooltip": "",
      "helpUrl": ""
    }
    ]);  // END JSON EXTRACT (Do not delete this comment.)


Blockly.Blocks['unlimited_style'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
    this.setStyle('list_blocks');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item_style']));
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item_style');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
        if (i == 0) {
          input.appendField("Styles");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['lists_create_with_item_style'] = {
  /**
   * Mutator block for adding items.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setStyle('list_blocks');
    this.appendDummyInput()
        .appendField("style");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_ITEM_TOOLTIP']);
    this.contextMenu = false;
  }
};
  