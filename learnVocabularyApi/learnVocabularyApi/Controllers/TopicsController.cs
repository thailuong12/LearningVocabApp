using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using learnVocabularyApi.Data;
using learnVocabularyApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace learnVocabularyApi.Controllers
{   
    [Route("api/[controller]")]
    [ApiController]
    public class TopicsController : Controller
    {
        private LearnVocabularyContext _topicContext;
        public TopicsController(LearnVocabularyContext context)
        {
            _topicContext = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Topic>> Get()
        {
            return _topicContext.Topics.OrderBy(a => Guid.NewGuid()).ToList() ;
        }

        [HttpPost]
        public ActionResult<Topic> Post([FromBody]Topic value)
        {
             _topicContext.Topics.Add(value);
            _topicContext.SaveChanges();
            return value;
        }

        [HttpPut]
        public ActionResult<Topic> Put([FromBody]Topic value)
        {
            _topicContext.Topics.Update(value);
            _topicContext.SaveChanges();
            return value;
        }

        [HttpDelete]
        public ActionResult<Topic> Delete([FromBody]string id)
        {
            var topic = _topicContext.Topics.Find(id);
            _topicContext.Topics.Remove(topic);
            _topicContext.SaveChanges();
            return topic;
        }

    }
}


