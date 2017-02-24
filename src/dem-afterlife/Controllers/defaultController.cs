using Microsoft.AspNetCore.Mvc;

namespace dem_afterlife.Controllers
{
	[Route("{*pathInfo}", Order = 10000)]
	public class DefaultController : Controller
	{
		// GET index
		[HttpGet]
		[Produces("text/html")]
		public string Get()
		{
			var path = "wwwroot/index.html";
			var responseString = System.IO.File.ReadAllText(path);
			return responseString;
		}
	}
}
