using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Theatre.Contracts.Requests;

namespace Theatre.Controllers
{
    [ApiController]
    [Route( "api/author" )]
    public class AuthorController : ControllerBase
    {
        private IAuthorRepository _authorRepository;

        public AuthorController( IAuthorRepository authorRepository )
        {
            _authorRepository = authorRepository;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            List<Author> authors = _authorRepository.GetAll();

            return Ok( authors );
        }

        [HttpGet, Route( "{id:int}" )]
        public IActionResult Get( [FromRoute] int id )
        {
            var author = _authorRepository.Get( id );

            if ( author == null )
            {
                return BadRequest( $"Author with id: {id} not found" );
            }

            return Ok( author );
        }

        [HttpPost]
        public IActionResult Create( [FromBody] CreateAuthorRequest request )
        {
            var author = new Author( request.Name, request.Surname, request.Birthday );
            _authorRepository.Create( author );
            return Ok( author );
        }

        [HttpDelete, Route( "{id:int}" )]
        public IActionResult Delete( [FromRoute] int id )
        {
            var author = _authorRepository.Get( id );
            if ( author != null )
            {
                _authorRepository.Remove( author );
            }

            return Ok();
        }
    }
}