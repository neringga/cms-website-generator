using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using BlocklyThemeGeneratorBackend.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace theme_generator_backend.Controllers
{
    [AllowAnonymous]
    [Route("api/themeUpdating")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class ThemeUpdatingController : Controller
    {
        private IThemeHelper _themeHelper;
        
        public ThemeUpdatingController()
        {
            _themeHelper = new ThemeHelper();
        }

        // POST api/themeUpdating
        [HttpPost]
        public HttpResponseMessage Post([FromBody] Request request)
        {
            _themeHelper.UpdateThemeAsync(request.Title, request.Content);
            
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
    
    public class Request
    {
        public string Title { get; set; }
        public string Content { get; set; }
    }
}