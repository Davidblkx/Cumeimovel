using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Cumeimovel.Model;
using System.Security.Claims;
using Microsoft.AspNetCore.Http.Authentication;

namespace Cumeimovel.Controllers
{
    [AllowAnonymous]
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Login");
        }

        [HttpGet("/Login")]
        public IActionResult Login(string returnUrl = "/")
        {
            var model = new ModelLogin();
            model.ReturnUrl = returnUrl;

            return View(model);
        }

        [HttpPost("/Login")]
        public async Task<IActionResult> Login(ModelLogin model)
        {
            if (HttpContext.User.Identity.IsAuthenticated) return RedirectToAction("Index", "Home");

            if (string.IsNullOrEmpty(model.User))
            {
                ModelState.AddModelError("User", "Utilizador não é valido");
            }
            if (string.IsNullOrEmpty(model.Pass))
            {
                ModelState.AddModelError("Pass", "Password não é valida");
            }

            if (!ModelState.IsValid)
            {
                return View(model);
            }


            // ***********************************************
            //[Database logic and password verification HERE ]
            // ***********************************************

            const string issuer = "http://mysite.domain";
            List<Claim> claims = new List<Claim>();

            //Set User, roles and other claims
            claims.Add(new Claim("User", model.User, ClaimValueTypes.String, issuer));

            //Creating and sign in auth cookie
            var userIdentity = new ClaimsIdentity("SecureLogin");
            userIdentity.AddClaims(claims);
            var userPrincipal = new ClaimsPrincipal(userIdentity);

            await HttpContext.Authentication.SignInAsync("Cookie", userPrincipal,
                new AuthenticationProperties
                {
                    ExpiresUtc = DateTime.UtcNow.AddHours(12),
                    IsPersistent = false,
                    AllowRefresh = false,
                });

            return RedirectToLocal(model.ReturnUrl);
        }

        [HttpGet("/Logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.Authentication.SignOutAsync("Cookie");
            return RedirectToAction("Index", "Home");
        }

        public IActionResult Forbidden()
        {
            return RedirectToAction("Login");
        }

        /// <summary>
        /// Called to prevent redirects out of domain
        /// </summary>
        /// <param name="returnUrl">The return URL.</param>
        /// <returns></returns>
        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
    }
}
