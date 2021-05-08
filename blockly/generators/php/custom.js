
Blockly.PHP['home'] = function(block) {
  var value_margin = Blockly.PHP.valueToCode(block, 'display_style', Blockly.PHP.ORDER_NONE);
  var statements_front_page = Blockly.PHP.statementToCode(block, 'input');
  
  var code =  `
        <?php /* Template Name: Home */ ?>
  <?php get_header();?>
  <div style="${value_margin}">
  ${statements_front_page}
  </div>
  <?php get_footer();?>`;

  return code;
};

Blockly.PHP['page_content'] = function(block) {
  var code = `
  <?php if (have_posts()) : while(have_posts()) : the_post() ;?>

  <div style="font-size: 30px; text-align: center; margin-bottom:20px;">
    <?php the_title(); ?>
  </div>
    
    <?php the_content();?>

  <?php endwhile; endif;?>`;

  return code;
};

Blockly.PHP['text_custom'] = function(block) {
  var value_text = Blockly.PHP.valueToCode(block, 'text', Blockly.PHP.ORDER_NONE);
  var value_text_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);
  var value_margins = Blockly.PHP.valueToCode(block, 'margins', Blockly.PHP.ORDER_NONE);

  var code = `<div style="${value_text_style} ${value_margins}">${removeLiterals(value_text)}</div>`;

  return code;
};

Blockly.PHP['image'] = function(block) {
  var value_image_url = Blockly.PHP.valueToCode(block, 'image_url', Blockly.PHP.ORDER_NONE);
  var number_image_opacity = block.getFieldValue('image_opacity');
  var value_width = Blockly.PHP.valueToCode(block, 'width', Blockly.PHP.ORDER_NONE);
  var value_height = Blockly.PHP.valueToCode(block, 'height', Blockly.PHP.ORDER_NONE);
  
  var code = `<img src="${removeLiterals(value_image_url)}" alt="Image" style="width:${value_width};height:${value_height};opacity:${number_image_opacity};">`;
  
  return code;
};

Blockly.PHP['text_style'] = function(block) {
  var value_font_family = Blockly.PHP.valueToCode(block, 'font_family', Blockly.PHP.ORDER_NONE);
  var dropdown_font_style = block.getFieldValue('font_style');
  var dropdown_font_weight = block.getFieldValue('font_weight');
  var number_font_size = block.getFieldValue('font_size');
  var value_font_color = Blockly.PHP.valueToCode(block, 'font_color', Blockly.PHP.ORDER_NONE);
  var value_background_color = Blockly.PHP.valueToCode(block, 'background_color', Blockly.PHP.ORDER_NONE);
  var dropdown_alignment = block.getFieldValue('alignment');
  var dropdown_transformation = block.getFieldValue('transformation');

  var text_transform = dropdown_transformation == 0 ? "" : `text-transform:${dropdown_transformation};`;

  var code = `font-family:${removeLiterals(value_font_family)}; font-size:${number_font_size}px; font-weight:${dropdown_font_weight}; color:${removeLiterals(value_font_color)}; background-color:${removeLiterals(value_background_color)}; text-align:${dropdown_alignment}; ${text_transform} font-style:${dropdown_font_style};`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['pixels'] = function(block) {
  var number_pixels = block.getFieldValue('pixels');

  var code = `${number_pixels}px`;
  
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['percents'] = function(block) {
  var number_percents = block.getFieldValue('percents');
  
  var code = `${number_percents}%`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['content_margin'] = function(block) {
  var value_left_margin = Blockly.PHP.valueToCode(block, 'left_margin', Blockly.PHP.ORDER_NONE);
  var value_right_margin = Blockly.PHP.valueToCode(block, 'right_margin', Blockly.PHP.ORDER_NONE);
  var value_top_margin = Blockly.PHP.valueToCode(block, 'top_margin', Blockly.PHP.ORDER_NONE);
  var value_bottom_margin = Blockly.PHP.valueToCode(block, 'bottom_margin', Blockly.PHP.ORDER_NONE);
  
  var code = `margin-right:${value_right_margin}; margin-left:${value_left_margin}; margin-top:${value_top_margin}; margin-bottom:${value_bottom_margin}; `;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['search_field'] = function(block) {
  var code = `<?php get_search_form();?>`;
  return code;
};

Blockly.PHP['display_style'] = function(block) {
  var value_margins = Blockly.PHP.valueToCode(block, 'margins', Blockly.PHP.ORDER_NONE);
  var value_border = Blockly.PHP.valueToCode(block, 'border', Blockly.PHP.ORDER_NONE);
  var value_background = Blockly.PHP.valueToCode(block, 'background', Blockly.PHP.ORDER_NONE);
  var value_padding = Blockly.PHP.valueToCode(block, 'padding', Blockly.PHP.ORDER_NONE);
  
  var code = `${value_margins} ${value_border} ${value_padding} background: ${removeLiterals(value_background)}; `;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['border'] = function(block) {
  var dropdown_border_style = block.getFieldValue('border_style');
  var value_border_width = Blockly.PHP.valueToCode(block, 'border_width', Blockly.PHP.ORDER_NONE);
  var value_border_color = Blockly.PHP.valueToCode(block, 'border_color', Blockly.PHP.ORDER_NONE);

  var code = `border-style: ${dropdown_border_style}; border-width: ${value_border_width}; border-color: ${removeLiterals(value_border_color)};`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['records'] = function(block) {
  var value_display_style = Blockly.PHP.valueToCode(block, 'display_style', Blockly.PHP.ORDER_NONE);
  var statements_item_configuration = Blockly.PHP.statementToCode(block, 'item_configuration');

  var code = `
  <?php if (have_posts()) : while(have_posts()) : the_post() ;?>
  <div style="${value_display_style}">
      ${statements_item_configuration}
  </div>
  <?php endwhile; endif;?>`;

  return code;
};

Blockly.PHP['padding'] = function(block) {
  var value_left = Blockly.PHP.valueToCode(block, 'left', Blockly.PHP.ORDER_NONE);
  var value_right = Blockly.PHP.valueToCode(block, 'right', Blockly.PHP.ORDER_NONE);
  var value_top = Blockly.PHP.valueToCode(block, 'top', Blockly.PHP.ORDER_NONE);
  var value_bottom = Blockly.PHP.valueToCode(block, 'bottom', Blockly.PHP.ORDER_NONE);

  var code = ` padding-right:${value_right}; padding-left:${value_left}; padding-top:${value_top}; padding-bottom:${value_bottom}; `

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['index'] = function(block) {
  var value_margins = Blockly.PHP.valueToCode(block, 'display_style', Blockly.PHP.ORDER_NONE);
  var statements_components = Blockly.PHP.statementToCode(block, 'input');

  var code = `
        <?php /* Template Name: Index page (default) */ ?>
  <?php get_header();?>
  <div style="${value_margins}">
  ${statements_components}
  </div>
  <?php get_footer();?>`;

  return code;
};

Blockly.PHP['empty_statement'] = function(block) {
  var code = '';
  return code;
};

Blockly.PHP['empty_value'] = function(block) {
  var code = '';
  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['row'] = function(block) {
  var dropdown_align = block.getFieldValue('align');
  var statements_input = Blockly.PHP.statementToCode(block, 'input');

  var code = `<div class="row ${dropdown_align}">${statements_input}</div>`;

  return code;
};

Blockly.PHP['column'] = function(block) {
  var dropdown_align = block.getFieldValue('align');
  var number_width = block.getFieldValue('width');
  var statements_input = Blockly.PHP.statementToCode(block, 'input');

  var code = `<div class="col-${number_width}" style="${dropdown_align}">${statements_input}</div>`;

  return code;
};

Blockly.PHP['hex_color_code'] = function(block) {
  var text_hex_colour = block.getFieldValue('hex_colour');
  
  return [text_hex_colour, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['size'] = function(block) {
  var value_width = Blockly.PHP.valueToCode(block, 'width', Blockly.PHP.ORDER_NONE);
  var value_height = Blockly.PHP.valueToCode(block, 'height', Blockly.PHP.ORDER_NONE);

  var code = `width:${value_width}; height:${value_height};`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['header'] = function(block) {
  var value_size = Blockly.PHP.valueToCode(block, 'size', Blockly.PHP.ORDER_NONE);
  var value_style = Blockly.PHP.valueToCode(block, 'style', Blockly.PHP.ORDER_NONE);
  var statements_content = Blockly.PHP.statementToCode(block, 'content');
  
  var code = `<header style="${value_style} ${value_size}">${statements_content}</header>`;

  return code;
};

Blockly.PHP['container'] = function(block) {
  var statements_components = Blockly.PHP.statementToCode(block, 'components');

  var code = `<div class="container-flex">${statements_components}</div>`;

  return code;
};

Blockly.PHP['vertical_alignment'] = function(block) {
  var dropdown_option = block.getFieldValue('option');

  return [dropdown_option, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['navbar'] = function(block) {
  var dropdown_text_color = block.getFieldValue('text_color');
  var value_style = Blockly.PHP.valueToCode(block, 'style', Blockly.PHP.ORDER_NONE);
  var statements_content = Blockly.PHP.statementToCode(block, 'content');

  var code = `
  <nav class="navbar navbar-expand-sm navbar-${dropdown_text_color}" style="${value_style}">
  ${statements_content}
  </nav>`;

  return code;
};

Blockly.PHP['navbar_brand'] = function(block) {
  var statements_components = Blockly.PHP.statementToCode(block, 'components');

  var code = `
  <a class="navbar-brand" href="#">
  ${statements_components}
  </a>`;

  return code;
};

Blockly.PHP['navbar_nav_items'] = function(block) {
  var code = `
  <ul class="navbar-nav">
  <li class="nav-item">
    <a class="nav-link" href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Pricing</a>
  </li>
</ul>`;

  return code;
};

Blockly.PHP['content'] = function(block) {
  var value_style = Blockly.PHP.valueToCode(block, 'style', Blockly.PHP.ORDER_NONE);
  var statements_components = Blockly.PHP.statementToCode(block, 'components');

  var code = `<div style="${value_style}">${statements_components}</div>`;

  return code;
};

Blockly.PHP['posts'] = function(block) {
  var number_posts_per_line = block.getFieldValue('posts_per_line');
  var statements_post = Blockly.PHP.statementToCode(block, 'post');
  var value_post_style = Blockly.PHP.valueToCode(block, 'post_style', Blockly.PHP.ORDER_NONE);

  var code = `
  <div class="row" id="posts">
    <script>
            $.ajax({
              type: "get",
              contentType: "application/json; charset=utf-8",
              url: \`https://localhost:44385/Posts\`,
              success: function (status) {
                var code = "";
                var counter = 1;
                for (const item in status) {
                  var chars = status[item].body.length;
                  var newCode = \`<div class="col" style="${value_post_style}">${statements_post}</div>\`;

                  if (counter === ${number_posts_per_line}) {
                    newCode += \`<div class="w-100"></div>\`;
                    counter = 0;
                  }

                  counter++;
                
                  code += newCode;
                }
                document.getElementById("posts").innerHTML = code;
              },
              error: function () {
                console.log("error");
              },
            });
    </script>
  </div>
  
  `;

  return code;
};


Blockly.PHP['item_title'] = function(block) {
  var value_post_title_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);

  var code = `
  <a href="\${status[item].link}"> 
    <p style="${value_post_title_style}">
      \${status[item].title}
    </p> 
  </a>`;
  return code;
};

Blockly.PHP['item_content'] = function(block) {
  var number_name = block.getFieldValue('max_chars');
  var value_post_content_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);

  var code = `
  <div style="${value_post_content_style}">
  \${status[item].body.slice(0, ${number_name})} \${chars > ${number_name} ? "..." : ""}
  </div>`;
  return code;
};

Blockly.PHP['item_excerpt'] = function(block) {
  var value_post_excerpt_style = Blockly.PHP.valueToCode(block, 'text_style', Blockly.PHP.ORDER_NONE);

  var code = `<div style="${value_post_excerpt_style}"><?php the_excerpt();?></div>`;
  return code;
};

Blockly.PHP['footer'] = function(block) {
  var dropdown_position = block.getFieldValue('position');
  var value_style = Blockly.PHP.valueToCode(block, 'style', Blockly.PHP.ORDER_NONE);
  var statements_components = Blockly.PHP.statementToCode(block, 'components');

  var code = `
  <footer class="${dropdown_position}" style="${value_style}">
    ${statements_components}
  </footer>`;

  return code;
};

Blockly.PHP['unlimited_style'] = function(block) {
  var code = "";
  for (var i = 0; i < block.itemCount_; i++) {
    code += (Blockly.PHP.valueToCode(block, 'ADD' + i, Blockly.PHP.ORDER_NONE) || '') + " ";
  }

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['background_color'] = function(block) {
  var value_name = Blockly.PHP.valueToCode(block, 'NAME', Blockly.PHP.ORDER_NONE);

  var code = `background: ${removeLiterals(value_name)};`;

  return [code, Blockly.PHP.ORDER_NONE];
};

Blockly.PHP['button'] = function(block) {
  var dropdown_size = block.getFieldValue('size');
  var value_text = Blockly.PHP.valueToCode(block, 'text', Blockly.PHP.ORDER_NONE);
  var value_style = Blockly.PHP.valueToCode(block, 'style', Blockly.PHP.ORDER_NONE);

  var code = `
  <button type="button" class="btn ${dropdown_size}" style="${value_style}">
  ${value_text}
  </button>`;

  return code;
};