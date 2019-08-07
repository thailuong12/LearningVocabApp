using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace learnVocabularyApi.Models
{
    public class Topic
    {
        [Key]
        public string id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public string Pronunciation { get; set; }
        public string Example { get; set; }
    }
}
