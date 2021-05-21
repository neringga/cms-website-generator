﻿using System;
using System.Collections.Generic;
 using backend.Models.Common;

 namespace backend.Models.Drupal
{
    public class DrupalPost: Post
    {
        public string nid { get; set; }
        public string title { get; set; }
        public string body { get; set; }
        public string created { get; set; }
        public string view_node { get; set; }
        
        public override string post_id => nid;
        public override string post_title => title;
        public override string post_body => body;
        public override DateTime post_date => Convert.ToDateTime(created).ToUniversalTime();
        public override string post_link => view_node;
    }
}
