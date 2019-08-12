using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using learnVocabularyApi.Data;
using learnVocabularyApi.Models;
using learnVocabularyApi.RequestBody;
using learnVocabularyApi.Results;
using Microsoft.AspNetCore.Mvc;

namespace learnVocabularyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VocabController : Controller
    {
        private LearnEnglishContext _DbContext;
        public VocabController(LearnEnglishContext context)
        {
            _DbContext = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Vocab>> Get()
        {
            return _DbContext.Vocab.OrderBy(a => Guid.NewGuid()).ToList();
        }

        [HttpPost]
        public ActionResult<AddVocabResult> Post([FromBody]Vocab value)
        {
            var result = _DbContext.Vocab.Add(value);
            _DbContext.SaveChanges();
            return new AddVocabResult
            {
                success = true,
                data = result.Entity
            };

        }

        [HttpPut]
        public ActionResult<EditVocabResult> Put([FromBody] EditVocab data)
        {
            Vocab vocab = _DbContext.Vocab.SingleOrDefault(t => t.id == data.id);
            var isChangeToLearning = false;
            if (vocab != null)
            {
                if(data.isChangeMarked)
                {
                    vocab.IsMarked = !vocab.IsMarked;
                }
                if(data.isChangeLearning)
                {
                    if (!vocab.IsLearning)
                    {
                        isChangeToLearning = true;
                    } 
                    vocab.IsLearning = !vocab.IsLearning;
                    vocab.IsMarked = false;

                }
                _DbContext.SaveChanges();
            }
            return new EditVocabResult
            {
                vocab = vocab,
                changeLearningState = data.isChangeLearning,
                changeToLearning = isChangeToLearning
            };
        }

        [HttpDelete]
        public ActionResult<Vocab> Delete([FromBody]string id)
        {
            var topic = _DbContext.Vocab.Find(id);
            _DbContext.Vocab.Remove(topic);
            _DbContext.SaveChanges();
            return topic;
        }

    }
}


