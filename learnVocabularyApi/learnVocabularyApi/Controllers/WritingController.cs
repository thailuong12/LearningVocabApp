using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using learnVocabularyApi.Data;
using learnVocabularyApi.Models;
using learnVocabularyApi.Results;

namespace learnVocabularyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WritingController : ControllerBase
    {
        private readonly LearnEnglishContext _context;

        public WritingController(LearnEnglishContext context)
        {
            _context = context;
        }

        // GET: api/Writings
        [HttpGet]
        public ActionResult<IEnumerable<WritingTopicsResult>> GetWriting()
        {
            return _context.Writing.Select(t => new WritingTopicsResult { id = t.id, Topic = t.Topic, TotalWords = t.TotalWords }).ToList();
        }

        // GET: api/Writings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWriting([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var writing = await _context.Writing.FindAsync(id);

            if (writing == null)
            {
                return NotFound();
            }

            return Ok(writing);
        }

        [HttpPut]
        public ActionResult<Writing> PutWriting([FromBody] Writing data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Writing writing = _context.Writing.SingleOrDefault(w => w.id == data.id);
            if(writing != null)
            {
                writing.Topic = data.Topic;
                writing.TotalWords = data.TotalWords;
                writing.Content = data.Content;
                _context.SaveChanges();
            }
            
            return writing;
            }

        // POST: api/Writings
        [HttpPost]
        public async Task<IActionResult> PostWriting([FromBody] Writing writing)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Writing.Add(writing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWriting", new { id = writing.id }, writing);
        }

        // DELETE: api/Writings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWriting([FromRoute] string id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var writing = await _context.Writing.FindAsync(id);
            if (writing == null)
            {
                return NotFound();
            }

            _context.Writing.Remove(writing);
            await _context.SaveChangesAsync();

            return Ok(writing);
        }

        private bool WritingExists(string id)
        {
            return _context.Writing.Any(e => e.id == id);
        }
    }
}