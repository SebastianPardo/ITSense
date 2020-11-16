using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Services.Business;
using Services.Models;

namespace Services.Controllers
{
    public class ProductController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Json(ProductManager.Instance.GetAll());
        }

        public IHttpActionResult Get(int id)
        {
            return Json(ProductManager.Instance.GetById(id));
        }

        [HttpDelete]
        [Route("~/Api/Product/Delete/{code}")]
        public IHttpActionResult Delete(int code)
        {
            var product = ProductManager.Instance.GetById(code);
            if (product == null)
            {
                return Ok();
            }
            return Ok(ProductManager.Instance.Delete(product));
        }

        [HttpPost]
        [Route("~/Api/Product/SaveProduct")]
        public IHttpActionResult SaveDispatch(Product product)
        {
            return Ok(ProductManager.Instance.Add(product));
        }
    }
}