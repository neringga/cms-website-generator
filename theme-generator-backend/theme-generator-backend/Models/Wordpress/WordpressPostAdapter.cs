using backend.Models.Common;
using backend.Models.Drupal;

namespace backend.Models.Wordpress
{
    public class WordpressPostAdapter: Post
    {
        private WordpressPost _post;

        public WordpressPostAdapter(WordpressPost post)
        {
            _post = post;
        }
        
        public override string id => _post.id.ToString();
        public override string title => _post.title.rendered;
        public override string body => _post.content.rendered;
    }
}