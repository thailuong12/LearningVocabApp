using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace learnVocabularyApi.Results
{
    public class WritingTopicsResult
    {
        public string id { get; set; }
        public string Topic { get; set; }
        public Int32 TotalWords { get; set; }
    }
}
