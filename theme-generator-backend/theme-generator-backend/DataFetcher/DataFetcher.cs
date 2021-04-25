﻿﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using backend.Models.Wordpress;

namespace backend.DataFetchers
{
    public class DataFetcher<T>: IDataFetcher
    {
        public HttpClient httpClient = new HttpClient();
        
        public DataFetcher()
        {
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<T> GetData(String url)
        {
            HttpResponseMessage response = await httpClient.GetAsync(url);
            
            if (response.IsSuccessStatusCode)
            {
                return await response.Content.ReadAsAsync<T>();
            }
            else
            {
                throw new InvalidOperationException(); 
            }
        }
    }
    
}