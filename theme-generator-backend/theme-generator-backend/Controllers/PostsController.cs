using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.DataFetchers;
using backend.Models;
using backend.Models.Common;
using backend.Models.Drupal;
using backend.Models.Joomla;
using backend.Models.Wordpress;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace theme_generator_backend.Controllers
{ 
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    public class PostsController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public PostsController(ILogger<PostsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Post>> Get()
        {
            List<Post> posts = new List<Post>();
            
            var drupalPosts = await (new DataFetcher<IEnumerable<DrupalPost>>())
                .GetData(Constants.BasePath + Constants.DrupalPosts)
                .ConfigureAwait(false);
            var wpPosts = await (new DataFetcher<IEnumerable<WordpressPost>>())
                .GetData(Constants.BasePath + Constants.WordpressPosts)
                .ConfigureAwait(false);
            var joomlaPosts = await (new JsonAPIDataFetcher<JoomlaPost>())
                .GetData(Constants.BasePath + Constants.JoomlaPosts, Constants.JoomlaAuthKey, Constants.JoomlaAuthValue)
                .ConfigureAwait(false);
            
            foreach (var drupalPost in drupalPosts)
            {
                posts.Add(drupalPost);
            }
            
            foreach (var wpPost in wpPosts)
            {
                posts.Add(wpPost);
            }
            
            foreach (var post in joomlaPosts.data)
            {
                posts.Add(post.attributes);
            }

            return posts.OrderByDescending(x => x.post_date);
        }
    }
}