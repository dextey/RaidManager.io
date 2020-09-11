using Microsoft.AspNetCore.Http;

namespace RaidManager.API.ExtensionMethods
{
    public static class GenericExtensions
    {
        //used to add Cors and custom headers to HttpResponse headers
        public static void AddApplicationError(this HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");
        }
    }
}