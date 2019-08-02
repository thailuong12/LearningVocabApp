﻿using System;
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
    public class TopicsController
    {
        private LearnVocabularyContext _topicContext;
        public TopicsController(LearnVocabularyContext context)
        {
            _topicContext = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Topic>> Get()
        {
            return _topicContext.Topics.ToList() ;
        }
    }
}