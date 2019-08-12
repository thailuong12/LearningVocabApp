using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using learnVocabularyApi.Models;

namespace learnVocabularyApi.Results
{
    public class EditVocabResult
    {
        public Vocab vocab { get; set; }
        public bool changeLearningState { get; set; }
        public bool changeToLearning { get; set; }
    }
}
