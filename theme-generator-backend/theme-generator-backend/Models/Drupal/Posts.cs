﻿﻿using System;
using System.Collections.Generic;

namespace backend.Models.Drupal
{
    public class DrupalPost
    {
        public string nid { get; set; }
        public string title { get; set; }
        public string body { get; set; }
        public string created { get; set; }
        public string view_node { get; set; }
    }
}