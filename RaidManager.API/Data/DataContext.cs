
using DatingV2.API.Models;
using Microsoft.EntityFrameworkCore;
using RaidManager.API.Models;

namespace DatingV2.API.Data

{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}    
        
        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set;}

        public DbSet<Character> Characters { get; set; }
    }
}