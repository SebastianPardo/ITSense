using System.Collections.Generic;
using Services.Models;
using Services.Data.Pattern;

namespace Services.Business
{
    public class ProductManager
    {
        private static ProductManager instance;

        public static ProductManager Instance => instance ?? (instance = new ProductManager());

        public List<Product> GetAll(params string[] routes) => (List<Product>)new Repository<Product>().GetAll(routes);

        public Product GetById(int id, params string[] routes) => new Repository<Product>().Single(x => x.Id == id, routes);
        public Product GetByCode(int code, params string[] routes) => new Repository<Product>().Single(x => x.Code == code, routes);

        public Product Add(Product entity)
        {
            using (var repo = new Repository<Product>())
            {
                Product pt = repo.Single(c => c.Id == entity.Id);
                if (pt == null)
                {
                    pt = repo.Add(entity);
                    repo.SaveChanges();
                    return pt;
                }

                return null;
            }
        }

        public bool Update(Product entity)
        {
            using (var repo = new Repository<Product>())
            {
                repo.Edit(entity);
                return repo.SaveChanges() > 0;
            }
        }

        public bool Delete(Product Product)
        {
            using (var repo = new Repository<Product>())
            {
                repo.Delete(Product);
                return repo.SaveChanges() > 0;
            }
        }
    }
}
