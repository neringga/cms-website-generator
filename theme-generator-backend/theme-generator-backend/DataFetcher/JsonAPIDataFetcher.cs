using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace backend.DataFetchers
{
    public class JsonAPIDataFetcher<T>
    {
        public HttpClient httpClient = new HttpClient();
        
        public JsonAPIDataFetcher()
        {
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/vnd.api+json"));
        }

        public async Task<T> GetData(String url, String authKey = null, String authValue = null)
        {
            httpClient.DefaultRequestHeaders.Add(authKey, authValue);

            HttpResponseMessage response = await httpClient.GetAsync(url);
            
            var formatters = new List<System.Net.Http.Formatting.MediaTypeFormatter>();
            formatters.Add(new System.Net.Http.Formatting.JsonMediaTypeFormatter());
            formatters.Add(new VndApiJsonMediaTypeFormatter());
            
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<T>(formatters);
            }
            else
            {
                throw new InvalidOperationException(); 
            }
        }
    }
}