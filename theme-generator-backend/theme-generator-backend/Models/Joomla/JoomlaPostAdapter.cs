using System;
using backend.Models.Common;

namespace backend.Models.Joomla
{
    public class JoomlaPostAdapter: Post
    {
        private JoomlaPostAttributes _post;
        
        public JoomlaPostAdapter(JoomlaPostAttributes post)
        {
            _post = post;
        }
        
        public override string id => _post.id.ToString();
        public override string title => _post.title;
        public override string body => _post.text;
        public override DateTime date => Convert.ToDateTime(_post.created);
        public override string link => "";
    }
}