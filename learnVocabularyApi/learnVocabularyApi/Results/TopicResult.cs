using learnVocabularyApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace learnVocabularyApi.Results
{
    public class TopicResult
    {
        public bool success { get; set; }
        public Topic data { get; set; }
    }
}
