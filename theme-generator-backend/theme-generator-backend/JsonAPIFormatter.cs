using System.Net.Http.Formatting;
using System.Net.Http.Headers;

public class VndApiJsonMediaTypeFormatter : JsonMediaTypeFormatter
{
    public VndApiJsonMediaTypeFormatter()
    {
        SupportedMediaTypes.Add(new MediaTypeHeaderValue("application/vnd.api+json"));
    }
}