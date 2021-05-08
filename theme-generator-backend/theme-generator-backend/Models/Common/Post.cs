using System;

namespace backend.Models.Common
{
    public class Post
    {
        public virtual string id { get; set; }
        public virtual string title { get; set; }
        public virtual string body { get; set; }
        public virtual DateTime date { get; set; }
        public virtual string link { get; set; }
    }
}