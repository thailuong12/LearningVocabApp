using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace learnVocabularyApi.RequestBody
{
    public class EditVocab
    {
        public string id { get; set; }
        public bool isChangeMarked { get; set; }
        public bool isChangeLearning { get; set; }
    }
}
