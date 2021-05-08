﻿using System;

namespace backend.Models
{
    public static class Constants
    {
        public static String BasePath = "http://localhost/";
        
        public static String WordpressPosts = "testsite/wp-json/wp/v2/posts";
        public static String DrupalPosts = "drupal1/posts?_format=json";
        public static String JoomlaPosts = "joomla-4/api/index.php/v1/content/article";

        public static String JoomlaAuthKey = "X-Joomla-Token";
        public static String JoomlaAuthValue = "c2hhMjU2OjY3NDozNGM4ZjQxZGU5NTJmYTczNThkOWI0MGVkM2M2MjRiMjYyYTJmZjI2YjhiZmNmZGQ3NzMzMGNmNzU5NDcwMGYx";
    }
}