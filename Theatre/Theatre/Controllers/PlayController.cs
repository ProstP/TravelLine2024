using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Theatre.Contracts.Requests;

namespace Theatre.Controllers
{
    [ApiController]
    [Route( "api/play" )]
    public class PlayController : ControllerBase
    {
        private IPlayRepository _playRepository;

        public PlayController( IPlayRepository playRepository )
        {
            _playRepository = playRepository;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var plays = _playRepository.GetAll();
            return Ok( plays );
        }

        [HttpGet, Route( "{id:int}" )]
        public IActionResult Get( [FromRoute] int id )
        {
            var play = _playRepository.Get( id );

            if ( play == null )
            {
                return BadRequest( $"Play with id: {id} not found" );
            }

            return Ok( play );
        }

        [HttpGet, Route( "theatre/{theatreId:int}" )]
        public IActionResult GetByTheatreId( [FromRoute] int theatreId )
        {
            var plays = _playRepository.GetByTheatreId( theatreId );
            return Ok( plays );
        }

        [HttpGet, Route( "composition/{compositionId:int}" )]
        public IActionResult GetByCompositionId( [FromRoute] int compositionId )
        {
            var plays = _playRepository.GetByCompositionId( compositionId );
            return Ok( plays );
        }

        [HttpPost]
        public IActionResult Create( [FromBody] CreatePlayRequest request )
        {
            var play = new Play( request.Name, request.StartTime, request.EndTime,
                request.TicketPrice, request.Description, request.TheatreId, request.CompositionId );

            _playRepository.Create( play );

            return Ok( play );
        }

        [HttpDelete, Route( "{id:int}" )]
        public IActionResult Delete( [FromRoute] int id )
        {
            var play = _playRepository.Get( id );

            if ( play != null )
            {
                _playRepository.Remove( play );
            }

            return Ok();
        }
    }
}
