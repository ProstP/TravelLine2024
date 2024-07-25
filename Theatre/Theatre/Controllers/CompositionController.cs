using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Theatre.Contracts.Requests;

namespace Theatre.Controllers
{
    [ApiController]
    [Route( "api/composition" )]
    public class CompositionController : ControllerBase
    {
        private ICompostionRepository _compostionRepository;

        public CompositionController( ICompostionRepository compostionRepository )
        {
            _compostionRepository = compostionRepository;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var compositions = _compostionRepository.GetAll();

            return Ok( compositions );
        }

        [HttpGet, Route( "{id:int}" )]
        public IActionResult Get( [FromRoute] int id )
        {
            var composition = _compostionRepository.Get( id );
            if ( composition == null )
            {
                return BadRequest( $"Composition with id: {id} not found" );
            }

            return Ok( composition );
        }

        [HttpGet, Route( "author/{authorId:int}" )]
        public IActionResult GetByAuthorId( [FromRoute] int authorId )
        {
            var compositions = _compostionRepository.GetByAuthorId( authorId );

            return Ok( compositions );
        }

        [HttpPost]
        public IActionResult Create( [FromBody] CreateCompositonRequest request )
        {
            var composition = new Composition( request.Name, request.ShortDescription, request.CharactersInfo, request.AuthorId );
            _compostionRepository.Create( composition );

            return Ok( composition );
        }

        [HttpDelete, Route( "{id:int}" )]
        public IActionResult Delete( [FromRoute] int id )
        {
            var composition = _compostionRepository.Get( id );
            if ( composition != null )
            {
                _compostionRepository.Remove( composition );
            }

            return Ok();
        }
    }
}
