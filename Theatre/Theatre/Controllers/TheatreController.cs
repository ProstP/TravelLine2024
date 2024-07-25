using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Theatre.Contracts.Requests;

namespace Theatre.Controllers
{
    [ApiController]
    [Route( "api/theatre" )]
    public class TheatreController : ControllerBase
    {
        private readonly ITheatreRepository _theatreRepository;

        public TheatreController( ITheatreRepository theatreRepository )
        {
            _theatreRepository = theatreRepository;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var theaters = _theatreRepository.GetAll();

            return Ok( theaters );
        }

        [HttpGet, Route( "{id:int}" )]
        public IActionResult Get( [FromRoute] int id )
        {
            var theatre = _theatreRepository.Get( id );
            if ( theatre == null )
            {
                return BadRequest( $"Theatre with id: {id} not found" );
            }

            return Ok( theatre );
        }

        [HttpPost]
        public IActionResult Create( [FromBody] CreateTheatreRequest request )
        {
            var theatre = new Domain.Entities.Theatre(
                request.Name, request.Address, request.OpeningDate, request.Description, request.PhoneNumber );

            _theatreRepository.Create( theatre );

            return Ok( theatre );
        }

        [HttpPut, Route( "{id:int}" )]
        public IActionResult Update( [FromRoute] int id, [FromBody] UpdateTheatreRequest request )
        {
            var theatre = _theatreRepository.Get( id );
            if ( theatre == null )
            {
                return BadRequest( $"Theatre with id: {id} not flound" );
            }

            theatre.Update( request.Name, request.Description, request.PhoneNumber );
            var newTheatre = _theatreRepository.Update( id, theatre );
            return Ok( newTheatre );
        }

        [HttpDelete, Route( "{id:int}" )]
        public IActionResult Delete( [FromRoute] int id )
        {
            var theatre = _theatreRepository.Get( id );

            if ( theatre != null )
            {
                _theatreRepository.Remove( theatre );
            }

            return Ok();
        }
    }
}
