using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using learnVocabularyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace learnVocabularyApi.Data
{
    public class LearnEnglishContext : DbContext
    {
        public LearnEnglishContext(DbContextOptions options) : base(options) { }

        public DbSet<Vocab> Vocab { get; set; }
        public DbSet<Writing> Writing { get; set; }
    }
}
