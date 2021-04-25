﻿using System;

namespace backend.Models
{
    public static class DataPaths
    {
        public static String BasePath = "http://localhost/";
        
        public static String WordpressPosts = "testsite/wp-json/wp/v2/posts";
        public static String DrupalPosts = "drupal1/posts?_format=json";
        public static String JoomlaPosts = "joomla-4/api/index.php/v1/content/article";

        public static String JoomlaAuthKey = "X-Joomla-Token";
        public static String JoomlaAuthValue = "";
    }
}