using backend.Models.Common;

namespace backend.Models.Drupal
{
    public class DrupalPostAdapter: Post
    {
        private DrupalPost _post;

        public DrupalPostAdapter(DrupalPost post)
        {
            _post = post;
        }

        public override string id => _post.nid;
        public override string title => _post.title;
        public override string body => _post.body;
    }
}