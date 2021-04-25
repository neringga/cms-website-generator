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
    public enum DataType
    {
        Wordpress,
        Drupal,
        Joomla
    }
    
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    // [EnableCors("MyPolicy")]
    public class PostsController : ControllerBase
    {
        private readonly ILogger<PostsController> _logger;

        public PostsController(ILogger<PostsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IEnumerable<Post>> Get(DataType type)
        {
            List<Post> posts = new List<Post>();
            switch (type)
            {
                case DataType.Drupal:
                    var result = await (new DataFetcher<IEnumerable<DrupalPost>>())
                        .GetData(DataPaths.BasePath + DataPaths.DrupalPosts)
                        .ConfigureAwait(false);

                    foreach (var drupalPost in result)
                    {
                        posts.Add(new DrupalPostAdapter(drupalPost));
                    }

                    break;
                
                case DataType.Wordpress:
                    var result2 = await (new DataFetcher<IEnumerable<WordpressPost>>())
                        .GetData(DataPaths.BasePath + DataPaths.WordpressPosts)
                        .ConfigureAwait(false);

                    foreach (var wpPost in result2)
                    {
                        posts.Add(new WordpressPostAdapter(wpPost));
                    }

                    break;
            }

            return posts;
        }
    }
}