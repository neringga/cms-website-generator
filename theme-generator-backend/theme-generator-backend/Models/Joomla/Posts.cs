﻿using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace backend.Models.Joomla
{
    public class Links
    {
        public string self { get; set; }
    }

    public class Images
    {
        public string image_intro { get; set; }
        public string image_intro_alt { get; set; }
        public string float_intro { get; set; }
        public string image_intro_caption { get; set; }
        public string image_fulltext { get; set; }
        public string image_fulltext_alt { get; set; }
        public string float_fulltext { get; set; }
        public string image_fulltext_caption { get; set; }
    }

    public class Metadata
    {
        public string robots { get; set; }
        public string author { get; set; }
        public string rights { get; set; }
    }

    public class JoomlaPostAttributes
    {
        public int id { get; set; }
        public int asset_id { get; set; }
        public string title { get; set; }
        public string alias { get; set; }
        public int state { get; set; }
        public int access { get; set; }
        public string created { get; set; }
        public int created_by { get; set; }
        public string created_by_alias { get; set; }
        public string modified { get; set; }
        public int featured { get; set; }
        public string language { get; set; }
        public int hits { get; set; }
        public string publish_up { get; set; }
        public object publish_down { get; set; }
        public string note { get; set; }
        public Images images { get; set; }
        public string metakey { get; set; }
        public string metadesc { get; set; }
        public Metadata metadata { get; set; }
        public int version { get; set; }
        public object featured_up { get; set; }
        public object featured_down { get; set; }
        public string typeAlias { get; set; }
        public string text { get; set; }
        public List<object> tags { get; set; }
    }

    public class JoomlaPostData
    {
        public string type { get; set; }
        public string id { get; set; }
        public JoomlaPostAttributes attributes { get; set; }
        public Relationships relationships { get; set; }
    }

    public class Category
    {
        public JoomlaPostData data { get; set; }
    }

    public class Author
    {
        public JoomlaPostData data { get; set; }
    }

    public class Relationships
    {
        public Category category { get; set; }
        public Author author { get; set; }
    }

    public class Meta
    {
        [JsonPropertyName("total-pages")]
        public int TotalPages { get; set; }
    }

    public class JoomlaPost
    {
        public Links links { get; set; }
        public List<JoomlaPostData> data { get; set; }
        public Meta meta { get; set; }
    }
}