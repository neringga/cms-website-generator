using System;

namespace backend.Models.Common
{
    public class Post
    {
        public virtual string post_id { get; set; }
        public virtual string post_title { get; set; }
        public virtual string post_body { get; set; }
        public virtual DateTime post_date { get; set; }
        public virtual string post_link { get; set; }
    }
}