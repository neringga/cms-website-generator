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
                posts.Add(new DrupalPostAdapter(drupalPost));
            }
            
            foreach (var wpPost in wpPosts)
            {
                posts.Add(new WordpressPostAdapter(wpPost));
            }
            
            foreach (var post in joomlaPosts.data)
            {
                posts.Add(new JoomlaPostAdapter(post.attributes));
            }

            return posts.OrderByDescending(x => x.date);
        }

        // [HttpGet]
        // public async Task<IEnumerable<Post>> Get(DataType type)
        // {
        //     List<Post> posts = new List<Post>();
        //     switch (type)
        //     {
        //         case DataType.Drupal:
        //             var result = await (new DataFetcher<IEnumerable<DrupalPost>>())
        //                 .GetData(Constants.BasePath + Constants.DrupalPosts)
        //                 .ConfigureAwait(false);
        //
        //             foreach (var drupalPost in result)
        //             {
        //                 posts.Add(new DrupalPostAdapter(drupalPost));
        //             }
        //
        //             break;
        //         
        //         case DataType.Wordpress:
        //             var result2 = await (new DataFetcher<IEnumerable<WordpressPost>>())
        //                 .GetData(Constants.BasePath + Constants.WordpressPosts)
        //                 .ConfigureAwait(false);
        //
        //             foreach (var wpPost in result2)
        //             {
        //                 posts.Add(new WordpressPostAdapter(wpPost));
        //             }
        //
        //             break;
        //         
        //         case DataType.Joomla:
        //             var result3 = await (new JsonAPIDataFetcher<JoomlaPost>())
        //                 .GetData(Constants.BasePath + Constants.JoomlaPosts, Constants.JoomlaAuthKey, Constants.JoomlaAuthValue)
        //                 .ConfigureAwait(false);
        //
        //             foreach (var post in result3.data)
        //             {
        //                 posts.Add(new JoomlaPostAdapter(post.attributes));
        //             }
        //
        //             break;
        //     }
        //
        //     return posts;
        // }
    }
}