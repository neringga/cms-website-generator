﻿﻿using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
 using backend.Models.Common;

 namespace backend.Models.Wordpress
{
    public class Guid
    {
        public string rendered { get; set; }
    }

    public class Title
    {
        public string rendered { get; set; }
    }

    public class Content
    {
        public string rendered { get; set; }
        public bool @protected { get; set; }
    }

    public class Excerpt
    {
        public string rendered { get; set; }
        public bool @protected { get; set; }
    }

    public class Meta
    {
        public string _et_pb_use_builder { get; set; }
        public string _et_pb_old_content { get; set; }
        public string _et_gb_content_width { get; set; }
    }

    public class Self
    {
        public string href { get; set; }
    }

    public class Collection
    {
        public string href { get; set; }
    }

    public class About
    {
        public string href { get; set; }
    }

    public class Author
    {
        public bool embeddable { get; set; }
        public string href { get; set; }
    }

    public class Reply
    {
        public bool embeddable { get; set; }
        public string href { get; set; }
    }

    public class VersionHistory
    {
        public int count { get; set; }
        public string href { get; set; }
    }

    public class PredecessorVersion
    {
        public int id { get; set; }
        public string href { get; set; }
    }

    public class WpAttachment
    {
        public string href { get; set; }
    }

    public class WpTerm
    {
        public string taxonomy { get; set; }
        public bool embeddable { get; set; }
        public string href { get; set; }
    }

    public class Cury
    {
        public string name { get; set; }
        public string href { get; set; }
        public bool templated { get; set; }
    }

    public class Links
    {
        public List<Self> self { get; set; }
        public List<Collection> collection { get; set; }
        public List<About> about { get; set; }
        public List<Author> author { get; set; }
        public List<Reply> replies { get; set; }

        [JsonPropertyName("version-history")]
        public List<VersionHistory> VersionHistory { get; set; }

        [JsonPropertyName("predecessor-version")]
        public List<PredecessorVersion> PredecessorVersion { get; set; }

        [JsonPropertyName("wp:attachment")]
        public List<WpAttachment> WpAttachment { get; set; }

        [JsonPropertyName("wp:term")]
        public List<WpTerm> WpTerm { get; set; }
        public List<Cury> curies { get; set; }
    }

    public class WordpressPost: Post
    {
        public int id { get; set; }
        public DateTime date { get; set; }
        public DateTime date_gmt { get; set; }
        public Guid guid { get; set; }
        public DateTime modified { get; set; }
        public DateTime modified_gmt { get; set; }
        public string slug { get; set; }
        public string status { get; set; }
        public string type { get; set; }
        public string link { get; set; }
        public Title title { get; set; }
        public Content content { get; set; }
        public Excerpt excerpt { get; set; }
        public int author { get; set; }
        public int featured_media { get; set; }
        public string comment_status { get; set; }
        public string ping_status { get; set; }
        public bool sticky { get; set; }
        public string template { get; set; }
        public string format { get; set; }
        // public Meta meta { get; set; }
        public List<int> categories { get; set; }
        public List<object> tags { get; set; }
        public Links _links { get; set; }
        
        public override string post_id => id.ToString();
        public override string post_title => title.rendered;
        public override string post_body => content.rendered;
        public override DateTime post_date => Convert.ToDateTime(date);
        public override string post_link => link;
    }
}