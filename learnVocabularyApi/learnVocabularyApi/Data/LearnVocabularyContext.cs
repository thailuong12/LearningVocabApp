using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using learnVocabularyApi.Models;
using Microsoft.EntityFrameworkCore;

namespace learnVocabularyApi.Data
{
    public class LearnVocabularyContext : DbContext
    {
        public LearnVocabularyContext(DbContextOptions options) : base(options) { }

        public DbSet<Topic> Topics { get; set; }
    }
}
