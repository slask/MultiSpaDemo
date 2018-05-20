using Microsoft.AspNetCore.Mvc;
using MultiSpaDemo.Models;
using System.Diagnostics;

namespace MultiSpaDemo.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
