
using DatingV2.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingV2.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}    
        
        public DbSet<Value> Values { get; set; }
    }
}