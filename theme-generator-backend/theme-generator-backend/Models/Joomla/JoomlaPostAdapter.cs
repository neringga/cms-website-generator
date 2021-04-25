using backend.Models.Common;

namespace backend.Models.Joomla
{
    public class JoomlaPostAdapter: Post
    {
        private JoomlaPost _post;
        
        public JoomlaPostAdapter(JoomlaPost post)
        {
            _post = post;
        }
    }
}