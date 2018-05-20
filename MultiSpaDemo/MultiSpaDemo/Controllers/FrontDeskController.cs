using Microsoft.AspNetCore.Mvc;

namespace MultiSpaDemo.Controllers
{
    public class FrontDeskController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}