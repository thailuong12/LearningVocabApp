using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace learnVocabularyApi.Models
{
    public class Writing
    {
        [Key]
        public string id { get; set; }
        public string Topic { get; set; }
        public string Content { get; set; }
        public Int32 TotalWords { get; set; }
    }
}
